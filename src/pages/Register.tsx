
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { BookOpen } from "lucide-react";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  section: "nursery" | "primary" | "secondary";
  childName?: string;
  childAge?: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    section: "primary",
    childName: "",
    childAge: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    
    if (formData.section === "nursery" || formData.section === "primary") {
      if (!formData.childName?.trim()) newErrors.childName = "Child's name is required";
      if (!formData.childAge?.trim()) newErrors.childAge = "Child's age is required";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is being edited
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Registration successful! Please check your email to verify your account.");
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation Bar */}
      <nav className="bg-maroon shadow-md py-4">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center gap-2">
              <BookOpen className="text-white h-8 w-8" />
              <span className="font-bold text-lg md:text-xl text-white whitespace-nowrap">
                SAHAB <span className="font-light">ACADEMY</span>
              </span>
            </a>
            <div>
              <Button 
                variant="outline" 
                onClick={() => navigate("/")}
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Registration Form */}
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 animate-fade-in">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-maroon mb-2">Join Sahab Academy</h1>
            <p className="text-gray-600">
              Complete the form below to register with Sahab Academy Nursery, Primary, and Secondary School
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>
              
              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="example@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              
              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
              
              {/* Section */}
              <div className="space-y-2">
                <label htmlFor="section" className="block text-sm font-medium text-gray-700">
                  School Section
                </label>
                <select
                  id="section"
                  name="section"
                  value={formData.section}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md bg-white"
                >
                  <option value="nursery">Nursery Section</option>
                  <option value="primary">Primary Section</option>
                  <option value="secondary">Secondary Section</option>
                </select>
              </div>
              
              {/* Conditional Fields for Parents */}
              {(formData.section === "nursery" || formData.section === "primary") && (
                <>
                  <div className="space-y-2">
                    <label htmlFor="childName" className="block text-sm font-medium text-gray-700">
                      Child's Name
                    </label>
                    <input
                      id="childName"
                      name="childName"
                      type="text"
                      value={formData.childName}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-md ${
                        errors.childName ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter child's full name"
                    />
                    {errors.childName && (
                      <p className="text-red-500 text-sm">{errors.childName}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="childAge" className="block text-sm font-medium text-gray-700">
                      Child's Age
                    </label>
                    <input
                      id="childAge"
                      name="childAge"
                      type="text"
                      value={formData.childAge}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-md ${
                        errors.childAge ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter child's age"
                    />
                    {errors.childAge && (
                      <p className="text-red-500 text-sm">{errors.childAge}</p>
                    )}
                  </div>
                </>
              )}
              
              {/* Password */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Create a password"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
              
              {/* Confirm Password */}
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md ${
                    errors.confirmPassword ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                )}
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="mt-8">
              <Button
                type="submit"
                className="w-full bg-maroon hover:bg-maroon-dark py-3 h-auto text-white font-medium text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Register Now"}
              </Button>
            </div>
            
            {/* Login Link */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                Already have an account?{" "}
                <a href="/" className="text-maroon hover:underline font-medium">
                  Sign in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
