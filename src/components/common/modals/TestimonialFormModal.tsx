import React, {useEffect, useState} from 'react';
import {useTheme} from "@/context/themeContext";

interface TestimonialFormModalProps {
  onClose: () => void;
}

export const TestimonialFormModal: React.FC<TestimonialFormModalProps> = ({onClose}) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const {theme} = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setName('');
    setMessage('');
    onClose();
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
      <div
          className={`fixed inset-0 bg-black/10 backdrop-blur-xl flex items-center justify-center p-4 z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div
            className={`${theme === 'dark' ? 'bg-[#1e2a3b]/90' : 'bg-white'} rounded-lg p-6 w-full max-w-md relative transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
              aria-label="Fermer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Laissez un
            témoignage</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name"
                     className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Nom</label>
              <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`mt-1 block w-full rounded-md px-4 py-3 text-lg ${
                      theme === 'dark'
                          ? 'bg-[#2c3e50] text-white border-gray-600'
                          : 'bg-white text-gray-700 border-gray-300'
                  } shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out`}
                  required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message"
                     className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
              <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className={`mt-1 block w-full rounded-md px-4 py-3 text-lg ${
                      theme === 'dark'
                          ? 'bg-[#2c3e50] text-white border-gray-600'
                          : 'bg-white text-gray-700 border-gray-300'
                  } shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out`}
                  required
              ></textarea>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                  type="button"
                  onClick={handleClose}
                  className={`py-2 px-4 border ${theme === 'dark' ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                Annuler
              </button>
              <button
                  type="submit"
                  className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1669F8] hover:bg-[#1255d6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1669F8]"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};