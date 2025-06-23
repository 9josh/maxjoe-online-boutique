
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface SignupProps {
  onSignup: (user: any) => void;
  onSwitchToLogin: () => void;
}

const Signup = ({ onSignup, onSwitchToLogin }: SignupProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    
    // Mock user creation
    const user = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      phone: "",
      address: {
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: ""
      }
    };
    onSignup(user);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container-medium margin-auto padding-horizontal-base padding-vertical-xl">
      <div className="layout-center-content" style={{ minHeight: "70vh" }}>
        <Card className="card-base container-xs layout-full-width">
          <div className="card-content">
            <div className="text-center margin-bottom-lg">
              <h1 className="heading-sm text-primary margin-bottom-sm">Create Account</h1>
              <p className="text-secondary">Join our luxury jewelry collection</p>
            </div>

            <form onSubmit={handleSubmit} className="space-vertical-base">
              <div>
                <Label htmlFor="name" className="text-primary margin-bottom-sm display-block">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="input-base"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-primary margin-bottom-sm display-block">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="input-base"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-primary margin-bottom-sm display-block">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  placeholder="Create a password"
                  required
                  className="input-base"
                />
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-primary margin-bottom-sm display-block">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange("confirmPassword", e.target.value)}
                  placeholder="Confirm your password"
                  required
                  className="input-base"
                />
              </div>

              <Button type="submit" className="btn btn-primary layout-full-width margin-top-lg">
                Create Account
              </Button>
            </form>

            <div className="text-center margin-top-lg">
              <p className="text-secondary">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={onSwitchToLogin}
                  className="text-silver-primary hover-text-silver font-medium"
                  style={{ textDecoration: "underline" }}
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
