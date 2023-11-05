import faq from '../../../assets/faq.jpg'

const FAQ = () => {
  return (
    <div className="max-w-7xl mx-auto my-32 p-5 md:p-4 lg:p-2">
      <h2 className="text-4xl font-bold text-center">Frequently Asked Questions</h2>
      <p className="max-w-4xl mx-auto text-center text-lg mt-5 mb-24 p-5 md:p-4 lg:p-2" > If you can't find the answers you're looking for in our FAQs, please
        don't hesitate to reach out to our dedicated team. We're here to assist
        you and ensure your wedding event is everything you've envisioned. Your
        satisfaction is our priority, and we're excited to be part of your
        special day. </p>
      <div className="flex gap-6 flex-col lg:flex-row items-center">
        <div className="flex-1" >
          <img src={faq} alt="" />
        </div>
        <div className="flex-1"
        >
          <div className="collapse collapse-plus bg-[#8ECDDD] mb-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
            Who can donate food on your platform?
            </div>
            <div className="collapse-content">
              <p>
              Individuals, restaurants, caterers, and businesses can all donate food through our platform. We welcome any surplus food that meets safety and quality standards.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#8ECDDD] mb-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
            Can I donate non-perishable food items?
            </div>
            <div className="collapse-content">
              <p>
              Yes, we accept non-perishable food items. However, please keep in mind that perishable items, when handled safely, can have a more immediate impact in reducing food waste.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#8ECDDD] mb-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
            Do you charge a fee for food donations or pickups?
            </div>
            <div className="collapse-content">
              <p>
              Our platform is designed to be cost-free for both donors and recipients. We do not charge any fees for the donation process.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#8ECDDD] mb-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
            What safety measures are in place to ensure food quality and safety?
            </div>
            <div className="collapse-content">
              <p>
              We prioritize food safety. Our guidelines and resources are in line with food safety standards. We encourage donors to follow best practices and guidelines to ensure the quality and safety of the food they donate.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#8ECDDD] mb-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
            How can I get involved as a volunteer or organizer for food-sharing events?
            </div>
            <div className="collapse-content">
              <p>
              To get involved, visit our "Get Involved" section on the website. You can find information on volunteering opportunities and organizing events there.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
