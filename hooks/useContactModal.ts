import { useState } from "react";

export function useContactModal() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactClick = (e: React.MouseEvent, url: string) => {
    if (url === "/contact") {
      e.preventDefault();
      setIsContactModalOpen(true);
    } else if (url === "/login" || url === "/login?new=true") {
      e.preventDefault();
      // Login/Sign up functionality to be implemented
    }
  };

  const closeModal = () => setIsContactModalOpen(false);

  return {
    isContactModalOpen,
    handleContactClick,
    closeModal,
  };
}
