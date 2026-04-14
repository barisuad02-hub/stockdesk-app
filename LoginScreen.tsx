import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function LoginScreen() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    setLoading(true);
    try {
      if (isSignUp) {
        await signup(email, password);
      } else {
        await login(email, password);
      }
      navigate('/home'); // This sends the user to the home screen after login
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white font-sans">
      {/* Left Panel - Visual (Hidden on small screens) */}
      <div className="hidden md:flex flex-1 bg-stone-100 relative overflow-hidden">
        <img 
          src="https://picsum.photos/seed/sovereign/800/1200" 
          alt="Visual"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-12 left-12">
          <h1 className="text-white text-4xl font-light leading-tight">
            Elegance in<br />Execution.
          </h1>
          <div className="h-[1px] w-12 bg-[#d4af37] mt-6" />
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex flex-col justify-center p-8 md:p-16">
        <div className="mb-12">
          <h2 className="text-4xl font-light tracking-tight text-[#1a1c1c] mb-3">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className="text-[#4d4635] font-light tracking-wide text-xs uppercase">
            {isSignUp ? 'Join the elite sovereign network.' : 'Sign in to access your sovereign terminal.'}
          </p>
        </div>

        <form onSubmit={handleAuth} className="space-y-8">
          <div>
            <label className="block text-[10px] font-semibold text-[#4d4635] uppercase tracking-widest mb-2">Email Address</label>
            <input
              type="email"
              className="w-full border-b border-stone-200 py-3 text-[#1a1c1c] outline-none focus:border-[#735c00]"
              placeholder="executive@sovereign.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[10px] font-semibold text-[#4d4635] uppercase tracking-widest">Security Key</label>
              {!isSignUp && (
                <button type="button" className="text-[10px] text-[#735c00] font-bold tracking-widest uppercase">Forgot?</button>
              )}
            </div>
            <input
              type="password"
              className="w-full border-b border-stone-200 py-3 text-[#1a1c1c] outline-none focus:border-[#735c00]"
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-[#735c00] py-4 rounded-md items-center justify-center flex text-white font-bold text-xs tracking-widest uppercase hover:bg-[#5a4800] transition-colors"
            disabled={loading}
          >
            {loading ? 'Authorizing...' : (isSignUp ? 'Create Access' : 'Authorize Access')}
          </button>
        </form>

        <div className="mt-16 flex items-center">
          <div className="flex-1 h-[1px] bg-stone-100" />
          <span className="mx-4 text-[10px] text-stone-400 uppercase tracking-widest">Connection Secure</span>
          <div className="flex-1 h-[1px] bg-stone-100" />
        </div>

        <div className="mt-8 text-center">
          <button onClick={() => setIsSignUp(!isSignUp)} className="text-sm text-[#4d4635] font-light">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <span className="text-[#735c00] font-bold uppercase tracking-widest text-xs ml-1"> 
              {isSignUp ? ' Sign In' : ' Register'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
