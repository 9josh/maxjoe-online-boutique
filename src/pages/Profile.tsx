
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Login from "@/components/Login";
import Signup from "@/components/Signup";
import Profile from "@/components/Profile";

const ProfilePage = () => {
  const [user, setUser] = useState<any>(null);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  useEffect(() => {
    // Check for existing user session in localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData: any) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleSignup = (userData: any) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleUpdateUser = (updatedUser: any) => {
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <div className="page-container">
      <Header />
      <main className="padding-top-xl">
        {user ? (
          <Profile 
            user={user} 
            onUpdateUser={handleUpdateUser}
            onLogout={handleLogout}
          />
        ) : (
          <>
            {authMode === 'login' ? (
              <Login 
                onLogin={handleLogin}
                onSwitchToSignup={() => setAuthMode('signup')}
              />
            ) : (
              <Signup
                onSignup={handleSignup}
                onSwitchToLogin={() => setAuthMode('login')}
              />
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
