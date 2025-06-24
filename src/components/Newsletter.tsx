
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="container-medium margin-auto text-center padding-horizontal-base">
        <h2 className="heading-xs sm-heading-sm md-heading-md font-light text-grey-charcoal margin-bottom-base">
          Stay Connected
        </h2>
        <p className="body-base sm-body-lg text-grey-slate margin-bottom-xl container-small margin-auto padding-horizontal-base">
          Be the first to discover our latest collections, exclusive offers, and jewelry insights. 
          Join our community of luxury enthusiasts.
        </p>
        
        <div className="newsletter-form-wrapper">
          <div className="newsletter-form-inner">
            <Input 
              type="email" 
              placeholder="Enter your email address"
              className="newsletter-input"
            />
            <Button className="newsletter-button">
              Subscribe
            </Button>
          </div>
        </div>
        
        <p className="newsletter-disclaimer">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
