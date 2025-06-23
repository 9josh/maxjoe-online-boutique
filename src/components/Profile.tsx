
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Edit, Save, X } from "lucide-react";

interface ProfileProps {
  user: any;
  onUpdateUser: (user: any) => void;
  onLogout: () => void;
}

const Profile = ({ user, onUpdateUser, onLogout }: ProfileProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleSave = () => {
    onUpdateUser(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(user);
    setIsEditing(false);
  };

  const handleChange = (field: string, value: string) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData((prev: any) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value }
      }));
    } else {
      setFormData((prev: any) => ({ ...prev, [field]: value }));
    }
  };

  return (
    <div className="container-medium margin-auto padding-horizontal-base padding-vertical-xl">
      <div className="margin-bottom-xl">
        <h1 className="heading-sm sm:heading-md font-light text-primary margin-bottom-base">
          My Profile
        </h1>
        <p className="text-secondary">Manage your account information and preferences</p>
      </div>

      <div className="grid-layout grid-1 lg:grid-2 gap-xl">
        {/* Personal Information */}
        <Card className="card-base">
          <div className="card-content">
            <div className="flex-between margin-bottom-lg">
              <h3 className="subheading-lg font-semibold text-primary">Personal Information</h3>
              {!isEditing ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsEditing(true)}
                  className="btn btn-outline"
                >
                  <Edit className="size-4 margin-right-sm" />
                  Edit
                </Button>
              ) : (
                <div className="flex-start space-horizontal-sm">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCancel}
                    className="btn btn-outline"
                  >
                    <X className="size-4" />
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleSave}
                    className="btn btn-primary"
                  >
                    <Save className="size-4" />
                  </Button>
                </div>
              )}
            </div>

            <div className="space-vertical-base">
              <div>
                <Label className="text-primary margin-bottom-sm display-block">Full Name</Label>
                {isEditing ? (
                  <Input
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="input-base"
                  />
                ) : (
                  <p className="text-secondary">{user.name}</p>
                )}
              </div>

              <div>
                <Label className="text-primary margin-bottom-sm display-block">Email Address</Label>
                {isEditing ? (
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="input-base"
                  />
                ) : (
                  <p className="text-secondary">{user.email}</p>
                )}
              </div>

              <div>
                <Label className="text-primary margin-bottom-sm display-block">Phone Number</Label>
                {isEditing ? (
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="Enter phone number"
                    className="input-base"
                  />
                ) : (
                  <p className="text-secondary">{user.phone || "Not provided"}</p>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Shipping Address */}
        <Card className="card-base">
          <div className="card-content">
            <h3 className="subheading-lg font-semibold text-primary margin-bottom-lg">Shipping Address</h3>
            
            <div className="space-vertical-base">
              <div>
                <Label className="text-primary margin-bottom-sm display-block">Street Address</Label>
                {isEditing ? (
                  <Input
                    value={formData.address.street}
                    onChange={(e) => handleChange("address.street", e.target.value)}
                    placeholder="Enter street address"
                    className="input-base"
                  />
                ) : (
                  <p className="text-secondary">{user.address.street || "Not provided"}</p>
                )}
              </div>

              <div className="grid-layout grid-2 gap-base">
                <div>
                  <Label className="text-primary margin-bottom-sm display-block">City</Label>
                  {isEditing ? (
                    <Input
                      value={formData.address.city}
                      onChange={(e) => handleChange("address.city", e.target.value)}
                      placeholder="City"
                      className="input-base"
                    />
                  ) : (
                    <p className="text-secondary">{user.address.city || "Not provided"}</p>
                  )}
                </div>

                <div>
                  <Label className="text-primary margin-bottom-sm display-block">State</Label>
                  {isEditing ? (
                    <Input
                      value={formData.address.state}
                      onChange={(e) => handleChange("address.state", e.target.value)}
                      placeholder="State"
                      className="input-base"
                    />
                  ) : (
                    <p className="text-secondary">{user.address.state || "Not provided"}</p>
                  )}
                </div>
              </div>

              <div className="grid-layout grid-2 gap-base">
                <div>
                  <Label className="text-primary margin-bottom-sm display-block">ZIP Code</Label>
                  {isEditing ? (
                    <Input
                      value={formData.address.zipCode}
                      onChange={(e) => handleChange("address.zipCode", e.target.value)}
                      placeholder="ZIP Code"
                      className="input-base"
                    />
                  ) : (
                    <p className="text-secondary">{user.address.zipCode || "Not provided"}</p>
                  )}
                </div>

                <div>
                  <Label className="text-primary margin-bottom-sm display-block">Country</Label>
                  {isEditing ? (
                    <Input
                      value={formData.address.country}
                      onChange={(e) => handleChange("address.country", e.target.value)}
                      placeholder="Country"
                      className="input-base"
                    />
                  ) : (
                    <p className="text-secondary">{user.address.country || "Not provided"}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Account Actions */}
      <Card className="card-base margin-top-xl">
        <div className="card-content">
          <h3 className="subheading-lg font-semibold text-primary margin-bottom-lg">Account Actions</h3>
          <Button
            variant="destructive"
            onClick={onLogout}
            className="btn btn-destructive"
          >
            Sign Out
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
