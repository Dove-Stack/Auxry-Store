// import React, { useContext, useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
// import "./Contact.css";
// import { assets } from "../../assets/assets";
// import { StoreContext } from "../../context/StoreContext";

// const Contact = () => {
//   const { url } = useContext(StoreContext);

//   const reCaptchaSiteKey = import.meta.env.VITE_AUXRY_STORE_SITE_KEY_CAPTCHA;

//   const [captchaToken, setCaptchaToken] = useState();

//   const validationSchema = Yup.object({
//     fullname: Yup.string().required("Full Name is required"),
//     email: Yup.string()
//       .required("Email is required")
//       .email("Invalid email format")
//       .test(
//         "is-gmail",
//         "Email must be a Gmail address (e.g example@gmail.com)",
//         (value) => !value || value.endsWith("@gmail.com")
//       ),
//     address: Yup.string().required("Address is required"),
//     city: Yup.string().required("City is required"),
//     state: Yup.string()
//       .matches(/^[A-Za-Z\s]+$/)
//       .required("State is required"),
//     zip: Yup.string()
//       .matches(/^\d{5}$/, "Zip Code must be 5 digits")
//       .required("Zip Code is required"),
//     message: Yup.string()
//       .min(10, "Message must be at least 10 characters")
//       .required("Message is required"),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//   });

//   const onSubmit = async (data) => {
//     if (!captchaToken) {
//       alert("Plese complete the reCAPTCHA verification.");
//       return;
//     }

//     try {
//       const response = await fetch(url + "/api/email/contact-feedback", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         alert("Your message has been submitted, and a confirmation email ");
//       } else {
//         alert("Failed to submit the form. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error submitting the form:", error);
//       "Error submitting the form:", error;
//     }

//     console.log("Form Data: ", data);
//     alert("Form Submitted successfully");
//   };

//   return (
//     <main>
//       <div className="contact-banner"></div>
//       <div className="banner-text">
//         <h2>Contact Us</h2>
//       </div>
//       <div className="row">
//         <div className="col-75">
//           <div className="container">
//             <form action="" onSubmit={handleSubmit(onSubmit)}>
//               <div className="row">
//                 <div className="col-50 col contact">
//                   <h2>User Details</h2>
//                   <label htmlFor="fname">
//                     <i className="bx bxs-user-rectangle"></i>{" "}
//                     <span>Full Name</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="fname"
//                     name="firstname"
//                     {...register("fullname")}
//                     placeholder="John M. Doe"
//                     required
//                   />
//                   <p className="error">{errors.fullname?.message}</p>
//                   <label htmlFor="email">
//                     <i className="bx bx-mail-send"></i> <span>Email</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="email"
//                     name="email"
//                     {...register("email")}
//                     placeholder="john@example.com"
//                     required
//                   />
//                   <p className="error">{errors.fullname?.message}</p>
//                   <label htmlFor="adr">
//                     <i className="bx bx-user-pin"></i> <span>Address</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="adr"
//                     name="address"
//                     {...register("address")}
//                     placeholder="542 W. 15th Street"
//                     required
//                   />
//                   <p className="error">{errors.fullname?.message}</p>
//                   <label htmlFor="city">
//                     <i className="bx bxs-city"></i> <span>City</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="city"
//                     name="city"
//                     {...register("city")}
//                     placeholder="New York"
//                     required
//                   />
//                   <p className="error">{errors.fullname?.message}</p>
//                   <div className="row bottom-row">
//                     <div className="col-50 col-address">
//                       <label htmlFor="state">
//                         <i className="bx bxs-bank"></i>
//                         State
//                       </label>
//                       <input
//                         type="text"
//                         id="state"
//                         name="state"
//                         {...register("state")}
//                         placeholder="NY"
//                       />
//                       <p className="error">{errors.fullname?.message}</p>
//                     </div>
//                     <div className="col-50 col-address zip">
//                       <label htmlFor="zip">
//                         <i className="bx bxs-pin"></i>Zip
//                       </label>
//                       <input
//                         type="text"
//                         id="zip"
//                         name="zip"
//                         {...register("zip")}
//                         placeholder="10001"
//                       />
//                       <p className="error">{errors.fullname?.message}</p>
//                     </div>
//                   </div>

//                   <label htmlFor="message">
//                     <i className="bx bx-chat"></i>
//                     <span>Message</span>
//                   </label>
//                   <textarea
//                     name="message"
//                     id="message"
//                     {...register("message")}
//                   ></textarea>
//                   <p className="error">{errors.fullname?.message}</p>

//                   <div className="recaptcha-container">
//                     <ReCAPTCHA
//                       sitekey={reCaptchaSiteKey}
//                       onChange={(token) => setCaptchaToken(token)}
//                     />
//                   </div>

//                   <button type="submit" className="btn">
//                     Submit
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className="col-50 col-img">
//           {/* <img src={assets.contactImg} alt="" /> */}
//           <iframe
//             width="600"
//             height="800"
//             frameborder="0"
//             scrolling="no"
//             marginheight="0"
//             marginwidth="0"
//             id="gmap_canvas"
//             src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Texas+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//           ></iframe>{" "}
//           <script
//             type="text/javascript"
//             src="https://embedmaps.com/google-maps-authorization/script.js?id=0ba9acdb19a10b9aad45c51fb578d14853e13cc2"
//           ></script>
//           {/* <ContactMap/> */}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Contact;

// import React, { useContext, useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
// import "./Contact.css";
// import { assets } from "../../assets/assets";
// import { StoreContext } from "../../context/StoreContext";
// import { toast } from "react-hot-toast";

// const Contact = () => {
//   const { url } = useContext(StoreContext);

//   const reCaptchaSiteKey = import.meta.env.VITE_AUXRY_STORE_SITE_KEY_CAPTCHA;

//   const [captchaToken, setCaptchaToken] = useState();

//   const validationSchema = Yup.object({
//     fullname: Yup.string().required("Full Name is required"),
//     email: Yup.string()
//       .required("Email is required")
//       .email("Invalid email format")
//       .test(
//         "is-gmail",
//         "Email must be a Gmail address (e.g example@gmail.com)",
//         (value) => !value || value.endsWith("@gmail.com")
//       ),
//     address: Yup.string().required("Address is required"),
//     city: Yup.string().required("City is required"),
//     state: Yup.string()
//       .required("State is required")
//       .matches(/^[A-Za-z\s]+$/, "State must contain only letters"),
//     zip: Yup.string()
//       .matches(/^\d{5}$/, "Zip Code must be 5 digits")
//       .required("Zip Code is required"),
//     message: Yup.string()
//       .min(10, "Message must be at least 10 characters")
//       .required("Message is required"),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//   });

//   const onSubmit = async (data) => {
//     if (!captchaToken) {
//       toast.error("Please complete captcha for verification.", {
//         style: {
//           border: "1px solid #ff0033",
//           padding: "13px",
//           fontSize: "11px",
//           color: "#ff0033",
//         },
//         iconTheme: {
//           primary: "#ff0033",
//           secondary: "#FFFAEE",
//         },
//       });
//       // alert("Please complete the reCAPTCHA verification.");
//       return;
//     }

//     try {
//       const response = await fetch(url + "/api/email/contact-feedback", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         toast.success("Your message has been submitted successfully!", {
//           style: {
//             border: "1px solid #4BB543",
//             padding: "13px",
//             fontSize: "11px",
//             color: "#4BB543",
//           },
//           iconTheme: {
//             primary: "#4BB543",
//             secondary: "#FFFAEE",
//           },
//         });
//         alert("Your message has been submitted, and a confirmation email ");
//       } else {
//         alert("Failed to submit the form. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error submitting the form:", error);
//       toast.error("Error submitting the form. Please try again.", {
//         style: {
//           border: "1px solid #ff0033",
//           padding: "13px",
//           fontSize: "11px",
//           color: "#ff0033",
//         },
//         iconTheme: {
//           primary: "#ff0033",
//           secondary: "#FFFAEE",
//         },
//       });
//       alert("Error submitting the form. Please try again.");
//     }

//     console.log("Form Data: ", data);
//     alert("Form Submitted successfully");
//   };

//   return (
//     <main>
//       <div className="contact-banner"></div>
//       <div className="banner-text">
//         <h2>Contact Us</h2>
//       </div>
//       <div className="row">
//         <div className="col-75">
//           <div className="container">
//             <form action="" onSubmit={handleSubmit(onSubmit)}>
//               <div className="row">
//                 <div className="col-50 col contact">
//                   <h2>User Details</h2>
//                   <label htmlFor="fname">
//                     <i className="bx bxs-user-rectangle"></i>{" "}
//                     <span>Full Name</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="fname"
//                     name="firstname"
//                     {...register("fullname")}
//                     placeholder="John M. Doe"
//                     required
//                   />
//                   <p className="error">{errors.fullname?.message}</p>
//                   <label htmlFor="email">
//                     <i className="bx bx-mail-send"></i> <span>Email</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="email"
//                     name="email"
//                     {...register("email")}
//                     placeholder="john@example.com"
//                     required
//                   />
//                   <p className="error">{errors.email?.message}</p>
//                   <label htmlFor="adr">
//                     <i className="bx bx-user-pin"></i> <span>Address</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="adr"
//                     name="address"
//                     {...register("address")}
//                     placeholder="542 W. 15th Street"
//                     required
//                   />
//                   <p className="error">{errors.address?.message}</p>
//                   <label htmlFor="city">
//                     <i className="bx bxs-city"></i> <span>City</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="city"
//                     name="city"
//                     {...register("city")}
//                     placeholder="New York"
//                     required
//                   />
//                   <p className="error">{errors.city?.message}</p>
//                   <div className="row bottom-row">
//                     <div className="col-50 col-address">
//                       <label htmlFor="state">
//                         <i className="bx bxs-bank"></i>
//                         State
//                       </label>
//                       <input
//                         type="text"
//                         id="state"
//                         name="state"
//                         {...register("state")}
//                         placeholder="NY"
//                       />
//                       <p className="error">{errors.state?.message}</p>
//                     </div>
//                     <div className="col-50 col-address zip">
//                       <label htmlFor="zip">
//                         <i className="bx bxs-pin"></i>Zip
//                       </label>
//                       <input
//                         type="text"
//                         id="zip"
//                         name="zip"
//                         {...register("zip")}
//                         placeholder="10001"
//                       />
//                       <p className="error">{errors.zip?.message}</p>
//                     </div>
//                   </div>

//                   <label htmlFor="message">
//                     <i className="bx bx-chat"></i>
//                     <span>Message</span>
//                   </label>
//                   <textarea
//                     name="message"
//                     id="message"
//                     {...register("message")}
//                   ></textarea>
//                   <p className="error">{errors.message?.message}</p>

//                   <div className="recaptcha-container">
//                     <ReCAPTCHA
//                       sitekey={reCaptchaSiteKey}
//                       onChange={(token) => setCaptchaToken(token)}
//                     />
//                   </div>

//                   <button type="submit" className="btn">
//                     Submit
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className="col-50 col-img">
//           <iframe
//             width="600"
//             height="1100"
//             frameborder="0"
//             scrolling="no"
//             marginheight="0"
//             marginwidth="0"
//             id="gmap_canvas"
//             src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Texas+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//           ></iframe>{" "}
//           <script
//             type="text/javascript"
//             src="https://embedmaps.com/google-maps-authorization/script.js?id=0ba9acdb19a10b9aad45c51fb578d14853e13cc2"
//           ></script>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Contact;

// import React, { useContext, useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
// import "./Contact.css";
// import { assets } from "../../assets/assets";
// import { StoreContext } from "../../context/StoreContext";
// import { toast } from "react-hot-toast";

// const Contact = () => {
//   const { url } = useContext(StoreContext);

//   const reCaptchaSiteKey = import.meta.env.VITE_AUXRY_STORE_SITE_KEY_CAPTCHA;

//   const [captchaToken, setCaptchaToken] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validationSchema = Yup.object({
//     fullname: Yup.string().required("Full Name is required"),
//     email: Yup.string()
//       .required("Email is required")
//       .email("Invalid email format")
//       .test(
//         "is-gmail",
//         "Email must be a Gmail address (e.g example@gmail.com)",
//         (value) => !value || value.endsWith("@gmail.com")
//       ),
//     address: Yup.string().required("Address is required"),
//     city: Yup.string().required("City is required"),
//     state: Yup.string()
//       .required("State is required")
//       .matches(/^[A-Za-z\s]+$/, "State must contain only letters"),
//     zip: Yup.string()
//       .matches(/^\d{5}$/, "Zip Code must be 5 digits")
//       .required("Zip Code is required"),
//     message: Yup.string()
//       .min(10, "Message must be at least 10 characters")
//       .required("Message is required"),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//   });

//   const onSubmit = async (data) => {
//     if (!captchaToken) {
//       toast.error("Please complete captcha for verification.", {
//         style: {
//           border: "1px solid #ff0033",
//           padding: "13px",
//           fontSize: "11px",
//           color: "#ff0033",
//         },
//         iconTheme: {
//           primary: "#ff0033",
//           secondary: "#FFFAEE",
//         },
//       });
//       return;
//     }

//     setIsSubmitting(true);
//     try {
//       const response = await fetch(url + "/api/email/contact-feedback", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         toast.success(
//           "Your message has been submitted, and a confirmation email has been sent.",
//           {
//             style: {
//               border: "1px solid #4BB543",
//               padding: "13px",
//               fontSize: "11px",
//               color: "#4BB543",
//             },
//             iconTheme: {
//               primary: "#4BB543",
//               secondary: "#FFFAEE",
//             },
//           }
//         );
//         reset(); // Reset form fields after successful submission
//       } else {
//         toast.error("Failed to submit the form. Please try again.", {
//           style: {
//             border: "1px solid #ff0033",
//             padding: "13px",
//             fontSize: "11px",
//             color: "#ff0033",
//           },
//           iconTheme: {
//             primary: "#ff0033",
//             secondary: "#FFFAEE",
//           },
//         });

//         if (!response.ok) {
//           console.log("Response status:", response.status, response.statusText);
//           const errorData = await response.json();
//           console.log("Error data:", errorData);
//           toast.error("Failed to submit the form. Please try again.");
//         }
//       }
//     } catch (error) {
//       console.error("Error submitting the form:", error);
//       toast.error("Error submitting the form. Please try again.", {
//         style: {
//           border: "1px solid #ff0033",
//           padding: "13px",
//           fontSize: "11px",
//           color: "#ff0033",
//         },
//         iconTheme: {
//           primary: "#ff0033",
//           secondary: "#FFFAEE",
//         },
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <main>
//       <div className="contact-banner"></div>
//       <div className="banner-text">
//         <h2>Contact Us</h2>
//       </div>
//       <div className="row">
//         <div className="col-75">
//           <div className="container">
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div className="row">
//                 <div className="col-50 col contact">
//                   <h2>User Details</h2>
//                   <label htmlFor="fname">
//                     <i className="bx bxs-user-rectangle"></i>{" "}
//                     <span>Full Name</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="fname"
//                     name="firstname"
//                     {...register("fullname")}
//                     placeholder="John M. Doe"
//                     required
//                   />
//                   <p className="error">{errors.fullname?.message}</p>
//                   <label htmlFor="email">
//                     <i className="bx bx-mail-send"></i> <span>Email</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="email"
//                     name="email"
//                     {...register("email")}
//                     placeholder="john@example.com"
//                     required
//                   />
//                   <p className="error">{errors.email?.message}</p>
//                   <label htmlFor="adr">
//                     <i className="bx bx-user-pin"></i> <span>Address</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="adr"
//                     name="address"
//                     {...register("address")}
//                     placeholder="542 W. 15th Street"
//                     required
//                   />
//                   <p className="error">{errors.address?.message}</p>
//                   <label htmlFor="city">
//                     <i className="bx bxs-city"></i> <span>City</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="city"
//                     name="city"
//                     {...register("city")}
//                     placeholder="New York"
//                     required
//                   />
//                   <p className="error">{errors.city?.message}</p>
//                   <div className="row bottom-row">
//                     <div className="col-50 col-address">
//                       <label htmlFor="state">
//                         <i className="bx bxs-bank"></i>
//                         State
//                       </label>
//                       <input
//                         type="text"
//                         id="state"
//                         name="state"
//                         {...register("state")}
//                         placeholder="NY"
//                       />
//                       <p className="error">{errors.state?.message}</p>
//                     </div>
//                     <div className="col-50 col-address zip">
//                       <label htmlFor="zip">
//                         <i className="bx bxs-pin"></i>Zip
//                       </label>
//                       <input
//                         type="text"
//                         id="zip"
//                         name="zip"
//                         {...register("zip")}
//                         placeholder="10001"
//                       />
//                       <p className="error">{errors.zip?.message}</p>
//                     </div>
//                   </div>

//                   <label htmlFor="message">
//                     <i className="bx bx-chat"></i>
//                     <span>Message</span>
//                   </label>
//                   <textarea
//                     name="message"
//                     id="message"
//                     {...register("message")}
//                   ></textarea>
//                   <p className="error">{errors.message?.message}</p>

//                   <div className="recaptcha-container">
//                     <ReCAPTCHA
//                       sitekey={reCaptchaSiteKey}
//                       onChange={(token) => setCaptchaToken(token)}
//                     />
//                   </div>

//                   <button type="submit" className="btn" disabled={isSubmitting}>
//                     {isSubmitting ? "Submitting..." : "Submit"}
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className="col-50 col-img">
//           <iframe
//             width="600"
//             height="800"
//             frameborder="0"
//             scrolling="no"
//             marginheight="0"
//             marginwidth="0"
//             id="gmap_canvas"
//             src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Texas+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//           ></iframe>{" "}
//           <script
//             type="text/javascript"
//             src="https://embedmaps.com/google-maps-authorization/script.js?id=0ba9acdb19a10b9aad45c51fb578d14853e13cc2"
//           ></script>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Contact;

// import React, { useContext, useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
// import "./Contact.css";
// import { assets } from "../../assets/assets";
// import { StoreContext } from "../../context/StoreContext";
// import { toast } from "react-hot-toast";

// const Contact = () => {
//   const { url } = useContext(StoreContext);

//   const reCaptchaSiteKey = import.meta.env.VITE_AUXRY_STORE_SITE_KEY_CAPTCHA;

//   const [captchaToken, setCaptchaToken] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validationSchema = Yup.object({
//     fullname: Yup.string().required("Full Name is required"),
//     email: Yup.string()
//       .required("Email is required")
//       .email("Invalid email format")
//       .test(
//         "is-gmail",
//         "Email must be a Gmail address (e.g example@gmail.com)",
//         (value) => !value || value.endsWith("@gmail.com")
//       ),
//     address: Yup.string().required("Address is required"),
//     city: Yup.string().required("City is required"),
//     state: Yup.string()
//       .required("State is required")
//       .matches(/^[A-Za-z\s]+$/, "State must contain only letters"),
//     zip: Yup.string()
//       .matches(/^\d{5}$/, "Zip Code must be 5 digits")
//       .required("Zip Code is required"),
//     message: Yup.string()
//       .min(10, "Message must be at least 10 characters")
//       .required("Message is required"),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//   });

//   const onSubmit = async (data) => {
//     if (!captchaToken) {
//       toast.error("Please complete captcha for verification.", {
//         style: {
//           border: "1px solid #ff0033",
//           padding: "13px",
//           fontSize: "11px",
//           color: "#ff0033",
//         },
//         iconTheme: {
//           primary: "#ff0033",
//           secondary: "#FFFAEE",
//         },
//       });
//       return;
//     }

//     setIsSubmitting(true);
//     try {
//       console.log("Request payload:", data);
//       console.log("reCAPTCHA token:", captchaToken);
//       const response = await fetch(url + "/api/email/contact-feedback", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ ...data, "g-recaptcha-response": captchaToken }),
//       });

//       if (response.ok) {
//         toast.success(
//           "Your message has been submitted, and a confirmation email has been sent.",
//           {
//             style: {
//               border: "1px solid #4BB543",
//               padding: "13px",
//               fontSize: "11px",
//               color: "#4BB543",
//             },
//             iconTheme: {
//               primary: "#4BB543",
//               secondary: "#FFFAEE",
//             },
//           }
//         );
//         reset();
//       } else {
//         const errorData = await response.json().catch(() => ({}));
//         console.log("Response status:", response.status, response.statusText);
//         console.log("Error data:", errorData);
//         toast.error(
//           errorData.message || "Failed to submit the form. Please try again.",
//           {
//             style: {
//               border: "1px solid #ff0033",
//               padding: "13px",
//               fontSize: "11px",
//               color: "#ff0033",
//             },
//             iconTheme: {
//               primary: "#ff0033",
//               secondary: "#FFFAEE",
//             },
//           }
//         );
//       }
//     } catch (error) {
//       console.error("Error submitting the form:", error);
//       toast.error("Error submitting the form. Please try again.", {
//         style: {
//           border: "1px solid #ff0033",
//           padding: "13px",
//           fontSize: "11px",
//           color: "#ff0033",
//         },
//         iconTheme: {
//           primary: "#ff0033",
//           secondary: "#FFFAEE",
//         },
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <main>
//       <div className="contact-banner"></div>
//       <div className="banner-text">
//         <h2>Contact Us</h2>
//       </div>
//       <div className="row">
//         <div className="col-75">
//           <div className="container">
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div className="row">
//                 <div className="col-50 col contact">
//                   <h2>User Details</h2>
//                   <label htmlFor="fname">
//                     <i className="bx bxs-user-rectangle"></i>{" "}
//                     <span>Full Name</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="fname"
//                     name="firstname"
//                     {...register("fullname")}
//                     placeholder="John M. Doe"
//                     required
//                   />
//                   <p className="error">{errors.fullname?.message}</p>
//                   <label htmlFor="email">
//                     <i className="bx bx-mail-send"></i> <span>Email</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="email"
//                     name="email"
//                     {...register("email")}
//                     placeholder="john@example.com"
//                     required
//                   />
//                   <p className="error">{errors.email?.message}</p>
//                   <label htmlFor="adr">
//                     <i className="bx bx-user-pin"></i> <span>Address</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="adr"
//                     name="address"
//                     {...register("address")}
//                     placeholder="542 W. 15th Street"
//                     required
//                   />
//                   <p className="error">{errors.address?.message}</p>
//                   <label htmlFor="city">
//                     <i className="bx bxs-city"></i> <span>City</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="city"
//                     name="city"
//                     {...register("city")}
//                     placeholder="New York"
//                     required
//                   />
//                   <p className="error">{errors.city?.message}</p>
//                   <div className="row bottom-row">
//                     <div className="col-50 col-address">
//                       <label htmlFor="state">
//                         <i className="bx bxs-bank"></i>
//                         State
//                       </label>
//                       <input
//                         type="text"
//                         id="state"
//                         name="state"
//                         {...register("state")}
//                         placeholder="NY"
//                       />
//                       <p className="error">{errors.state?.message}</p>
//                     </div>
//                     <div className="col-50 col-address zip">
//                       <label htmlFor="zip">
//                         <i className="bx bxs-pin"></i>Zip
//                       </label>
//                       <input
//                         type="text"
//                         id="zip"
//                         name="zip"
//                         {...register("zip")}
//                         placeholder="10001"
//                       />
//                       <p className="error">{errors.zip?.message}</p>
//                     </div>
//                   </div>

//                   <label htmlFor="message">
//                     <i className="bx bx-chat"></i>
//                     <span>Message</span>
//                   </label>
//                   <textarea
//                     name="message"
//                     id="message"
//                     {...register("message")}
//                   ></textarea>
//                   <p className="error">{errors.message?.message}</p>

//                   <div className="recaptcha-container">
//                     <ReCAPTCHA
//                       sitekey={reCaptchaSiteKey}
//                       onChange={(token) => setCaptchaToken(token)}
//                     />
//                   </div>

//                   <button type="submit" className="btn" disabled={isSubmitting}>
//                     {isSubmitting ? "Submitting..." : "Submit"}
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className="col-50 col-img">
//           <iframe
//             width="600"
//             height="800"
//             frameborder="0"
//             scrolling="no"
//             marginheight="0"
//             marginwidth="0"
//             id="gmap_canvas"
//             src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Texas+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//           ></iframe>{" "}
//           <script
//             type="text/javascript"
//             src="https://embedmaps.com/google-maps-authorization/script.js?id=0ba9acdb19a10b9aad45c51fb578d14853e13cc2"
//           ></script>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Contact;

import React, { useContext, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./Contact.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-hot-toast";

const Contact = () => {
  const { url } = useContext(StoreContext);

  const reCaptchaSiteKey = import.meta.env.VITE_AUXRY_STORE_SITE_KEY_CAPTCHA;

  const [captchaToken, setCaptchaToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object({
    fullname: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format")
      .test(
        "is-gmail",
        "Email must be a Gmail address (e.g example@gmail.com)",
        (value) => !value || value.endsWith("@gmail.com")
      ),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string()
      .required("State is required")
      .matches(/^[A-Za-z\s]+$/, "State must contain only letters"),
    zip: Yup.string()
      .matches(/^\d{5}$/, "Zip Code must be 5 digits")
      .required("Zip Code is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    if (!captchaToken) {
      toast.error("Please complete captcha for verification.", {
        style: {
          border: "1px solid #ff0033",
          padding: "13px",
          fontSize: "11px",
          color: "#ff0033",
        },
        iconTheme: {
          primary: "#ff0033",
          secondary: "#FFFAEE",
        },
      });
      return;
    }

    setIsSubmitting(true);
    try {
      console.log("Request payload:", data);
      const response = await fetch(url + "/api/email/contact-feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Removed g-recaptcha-response as backend doesn't use it
      });

      if (response.ok) {
        toast.success(
          "Your message has been submitted, and a confirmation email has been sent.",
          {
            style: {
              border: "1px solid #4BB543",
              padding: "13px",
              fontSize: "11px",
              color: "#4BB543",
            },
            iconTheme: {
              primary: "#4BB543",
              secondary: "#FFFAEE",
            },
          }
        );
        reset();
        setCaptchaToken(null); // Reset reCAPTCHA token
      } else {
        let errorMessage = "Failed to submit the form. Please try again.";
        try {
          const errorData = await response.json();
          console.log("Response status:", response.status, response.statusText);
          console.log("Error data:", errorData);
          errorMessage = errorData.message || errorMessage;
        } catch (jsonError) {
          console.error("Error parsing JSON response:", jsonError);
        }
        toast.error(errorMessage, {
          style: {
            border: "1px solid #ff0033",
            padding: "13px",
            fontSize: "11px",
            color: "#ff0033",
          },
          iconTheme: {
            primary: "#ff0033",
            secondary: "#FFFAEE",
          },
        });
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("Error submitting the form. Please try again.", {
        style: {
          border: "1px solid #ff0033",
          padding: "13px",
          fontSize: "11px",
          color: "#ff0033",
        },
        iconTheme: {
          primary: "#ff0033",
          secondary: "#FFFAEE",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <div className="contact-banner"></div>
      <div className="banner-text">
        <h2>Contact Us</h2>
      </div>
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-50 col contact">
                  <h2>User Details</h2>
                  <label htmlFor="fname">
                    <i className="bx bxs-user-rectangle"></i>{" "}
                    <span>Full Name</span>
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    {...register("fullname")}
                    placeholder="John M. Doe"
                    required
                  />
                  <p className="error">{errors.fullname?.message}</p>
                  <label htmlFor="email">
                    <i className="bx bx-mail-send"></i> <span>Email</span>
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    {...register("email")}
                    placeholder="john@example.com"
                    required
                  />
                  <p className="error">{errors.email?.message}</p>
                  <label htmlFor="adr">
                    <i className="bx bx-user-pin"></i> <span>Address</span>
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    {...register("address")}
                    placeholder="542 W. 15th Street"
                    required
                  />
                  <p className="error">{errors.address?.message}</p>
                  <label htmlFor="city">
                    <i className="bx bxs-city"></i> <span>City</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    {...register("city")}
                    placeholder="New York"
                    required
                  />
                  <p className="error">{errors.city?.message}</p>
                  <div className="row bottom-row">
                    <div className="col-50 col-address">
                      <label htmlFor="state">
                        <i className="bx bxs-bank"></i>
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        {...register("state")}
                        placeholder="NY"
                      />
                      <p className="error">{errors.state?.message}</p>
                    </div>
                    <div className="col-50 col-address zip">
                      <label htmlFor="zip">
                        <i className="bx bxs-pin"></i>Zip
                      </label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        {...register("zip")}
                        placeholder="10001"
                      />
                      <p className="error">{errors.zip?.message}</p>
                    </div>
                  </div>

                  <label htmlFor="message">
                    <i className="bx bx-chat"></i>
                    <span>Message</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    {...register("message")}
                  ></textarea>
                  <p className="error">{errors.message?.message}</p>

                  <div className="recaptcha-container">
                    <ReCAPTCHA
                      sitekey={reCaptchaSiteKey}
                      onChange={(token) => setCaptchaToken(token)}
                    />
                  </div>

                  <button type="submit" className="btn" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-50 col-img">
          <iframe
            width="600"
            height="800"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Texas+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>{" "}
          <script
            type="text/javascript"
            src="https://embedmaps.com/google-maps-authorization/script.js?id=0ba9acdb19a10b9aad45c51fb578d14853e13cc2"
          ></script>
        </div>
      </div>
    </main>
  );
};

export default Contact;
