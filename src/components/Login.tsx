
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface LoginProps {
  onLogin: (user: any) => void;
  onSwitchToSignup: () => void;
}

const Login = ({ onLogin, onSwitchToSignup }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in real app, this would call an API
    const user = {
      id: 1,
      name: "John Doe",
      email: email,
      phone: "+1 (555) 123-4567",
      address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "United States"
      }
    };
    onLogin(user);
  };

  return (
    <div className="container-medium margin-auto padding-horizontal-base padding-vertical-xl">
      <div className="layout-center-content" style={{ minHeight: "70vh" }}>
        <Card className="card-base container-xs layout-full-width">
          <div className="card-content">
            <div className="text-center margin-bottom-lg">
              <h1 className="heading-sm text-primary margin-bottom-sm">Welcome Back</h1>
              <p className="text-secondary">Sign in to your account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-vertical-base">
              <div>
                <Label htmlFor="email" className="text-primary margin-bottom-sm display-block">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="input-base"
                />
              </div>

              <Button type="submit" className="btn btn-primary layout-full-width margin-top-lg">
                Sign In
              </Button>
            </form>

            <div className="text-center margin-top-lg">
              <p className="text-secondary">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={onSwitchToSignup}
                  className="text-silver-primary hover-text-silver font-medium"
                  style={{ textDecoration: "underline" }}
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
