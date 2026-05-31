import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState, useRef } from "react"; // Added useRef to manage the reCAPTCHA instance
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha"; // Import the reCAPTCHA component

function ContactForm() {
  const recaptchaRef = useRef(null); // Ref used to manually reset the widget after submission
  const [captchaToken, setCaptchaToken] = useState(null); // State tracking the verification token
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError((prev) => ({ ...prev, required: false }));
    }
  };

  // Callback function triggered when a user completes the checkbox verification
  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    // 1. Client-side input validation
    if (!userInput.email || !userInput.message || !userInput.name) {
      setError((prev) => ({ ...prev, required: true }));
      return;
    } else if (error.email) {
      return;
    } else {
      setError((prev) => ({ ...prev, required: false }));
    }

    // 2. Strict Check: Stop form submission if the user hasn't clicked the reCAPTCHA box
    if (!captchaToken) {
      toast.error("Please complete the reCAPTCHA verification!");
      return;
    }

    try {
      setIsLoading(true);

      // 3. Step One: Submit the token to your Express server for server-side verification
      const captchaRes = await axios.post(
        `${import.meta.env.VITE_APP_URL}/api/google-recaptcha`,
        { token: captchaToken }
      );

      // 4. Step Two: If Google verifies the token, proceed with sending the message
      if (captchaRes.data.success) {
        await axios.post(
          `${import.meta.env.VITE_APP_URL}/api/contact`,
          userInput
        );

        toast.success("Message sent successfully!");
        
        // Reset states and clear form inputs
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
        setCaptchaToken(null);
        
        // Visually uncheck the reCAPTCHA box back to empty state
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      }
    } catch (err) {
      toast.error(err?.response?.data?.error || err?.response?.data?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Contact with me
      </p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          If you have any questions or concerns, please don't hesitate to
          contact me. I am open to any work opportunities that align with my
          skills and interests.
        </p>

        <div className="mt-6 flex flex-col gap-4">
          {/* Name Input */}
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="text"
              maxLength={100}
              required
              onChange={(e) =>
                setUserInput({ ...userInput, name: e.target.value })
              }
              onBlur={checkRequired}
              value={userInput.name}
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Email: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="email"
              maxLength={100}
              required
              value={userInput.email}
              onChange={(e) =>
                setUserInput({ ...userInput, email: e.target.value })
              }
              onBlur={() => {
                checkRequired();
                setError((prev) => ({
                  ...prev,
                  email: !isValidEmail(userInput.email),
                }));
              }}
            />
            {error.email && (
              <p className="text-sm text-red-400">
                Please provide a valid email!
              </p>
            )}
          </div>

          {/* Message Input */}
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message: </label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              maxLength={500}
              name="message"
              required
              onChange={(e) =>
                setUserInput({ ...userInput, message: e.target.value })
              }
              onBlur={checkRequired}
              rows={4}
              value={userInput.message}
            />
          </div>

          {/* Submit Actions */}
          <div className="flex flex-col items-center gap-3 mt-4">
            
            {/* Added Google reCAPTCHA container element */}
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={onCaptchaChange}
              theme="dark" // Sets a sleek layout look matching your background theme color
            />

            {error.required && (
              <p className="text-sm text-red-400">All fields are required!</p>
            )}

            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-linear-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold disabled:opacity-50"
              onClick={handleSendMail}
              disabled={isLoading}
            >
              {isLoading ? (
                <span>Sending Message...</span>
              ) : (
                <span className="flex items-center gap-1">
                  Send Message
                  <TbMailForward size={20} />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;