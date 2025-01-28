import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="bg-black text-white py-10 px-4 mt-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold">Connect With Us</h1>
          <p className="text-xl mt-4">Feel free to reach out with any questions or to start a project with us!</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-around items-start lg:items-center gap-10">
          {/* Contact Form Section */}
          <div className="flex-1">
            <ContactForm />
          </div>

          {/* Map and Social Media Links */}
          <div className="flex-1 flex flex-col items-center w-full">
            {/* Google Maps iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.153681850955!2d-90.37735668464987!3d38.623191079623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b31b4405f037%3A0x5776864e35b9c70a!2s241%20Hanley%20Industrial%20Ct%2C%20St.%20Louis%2C%20MO%2063144%2C%20USA!5e0!3m2!1sen!2sca!4v1665321893576"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
