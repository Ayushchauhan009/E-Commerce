import React, {useRef} from "react";
import emailjs from "emailjs-com";

const Form = () => {
    const formRef = useRef(null);
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      const serviceId = "service_gmail";
      const templateId = "template_email";
      const userId = "r8FD8zGLGFkGXKFNu";
  
      emailjs
        .sendForm(serviceId, templateId, e.target, userId)
        .then((response) => {
          console.log("Email sent successfully:", response);
          if (formRef.current) {
            formRef.current.reset();
          }
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    };
  return (
    <div className="pl-6 pr-6 lg:py-7 lg:shadow-2xl">
      <form ref={formRef} className="lg:my-6 lg:px-14" onSubmit={handleFormSubmit}>
        <input
          type="text"
          required
          name="full_name"
          placeholder="Full Name*"
          className="bg-[#e3e3e3] my-2 p-2 w-full placeholder-black outline-none"
        />
        <input
          type="tel"
          name="phone"
          required
          placeholder="Phone no*"
          className="bg-[#e3e3e3] my-2 p-2 w-full placeholder-black outline-none"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email id*"
          className="bg-[#e3e3e3] my-2 p-2 w-full placeholder-black outline-none"
        />
        <input
          type="text"
          name="company_name"
          required
          placeholder="Company Name*"
          className="bg-[#e3e3e3] my-2 p-2 w-full placeholder-black outline-none"
        />
        <input
          type="url"
          name="company_url"
          required
          placeholder="Company URL*"
          className="bg-[#e3e3e3] my-2 p-2 w-full placeholder-black outline-none"
        />
        <button
          className="bg-purple-500 text-white w-full py-2 font-bold mt-3 rounded-full mb-6"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
