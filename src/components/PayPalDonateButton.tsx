import { useEffect } from 'react';

declare global {
  interface Window {
    PayPal: any;
  }
}

interface PayPalDonateButtonProps {
  buttonId?: string;
}

export const PayPalDonateButton = ({ buttonId = 'donate-button' }: PayPalDonateButtonProps) => {
  useEffect(() => {
    const scriptId = 'paypal-donate-sdk';
    
    const renderButton = () => {
      if (window.PayPal && window.PayPal.Donation && window.PayPal.Donation.Button) {
        const container = document.getElementById(buttonId);
        if (container) {
          container.innerHTML = ''; // Clear existing button to prevent duplicates
          try {
            window.PayPal.Donation.Button({
              env: 'production',
              hosted_button_id: 'F9FCB7NJWKHEY',
              image: {
                src: 'https://www.paypalobjects.com/es_ES/ES/i/btn/btn_donateCC_LG.gif',
                alt: 'Botón Donar con PayPal',
                title: 'PayPal - The safer, easier way to pay online!',
              }
            }).render(`#${buttonId}`);
          } catch (error) {
            console.error('Error rendering PayPal button:', error);
          }
        }
      }
    };

    // Check if script is already present
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.src = 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js';
      script.id = scriptId;
      script.charset = 'UTF-8';
      script.async = true;
      document.body.appendChild(script);
    }

    // If PayPal is already available, render immediately
    if (window.PayPal && window.PayPal.Donation) {
      renderButton();
    } else {
      // Otherwise wait for load
      const prevOnload = script.onload;
      script.onload = (e) => {
        if (prevOnload) (prevOnload as any)(e);
        renderButton();
      };
    }
    
    // Also try to render if the script was already loaded but we missed the event
    // or if we are re-mounting
    const interval = setInterval(() => {
        if (window.PayPal && window.PayPal.Donation) {
            try {
                renderButton();
            } catch (e) {
                console.error("Error rendering PayPal button in interval:", e);
            }
            clearInterval(interval);
        }
    }, 500);

    return () => clearInterval(interval);

  }, [buttonId]);

  return (
    <div id={`${buttonId}-container`} className="flex justify-center my-6">
      <div id={buttonId}></div>
    </div>
  );
};
