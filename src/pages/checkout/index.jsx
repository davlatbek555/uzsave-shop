import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import './app.css';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => 
toast.success('Muvaffaqiyatli tasdiqlandi', {
    style: {
      border: '1px solid #28a745',
      padding: '16px',
      color: '#28a745',
    },
    iconTheme: {
      primary: '#28a745',
      secondary: '#FFFAEE',
    },
  });

const Funk = () => {
  const [phone, setPhone] = useState('');

  return (
    <div>
      <PhoneInput
        required
        defaultCountry="uz"
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />
    </div>
  );
};

function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowConfirmation(true);
    };

    return (
        <div className="checkout-container">
            <h2 className='checkout-h2'>Checkout Tizimi</h2>
            {!showConfirmation ? (
                <form onSubmit={handleSubmit}>
            <div className="checkout-row">
            <label htmlFor="checkout-num">Telefon raqami </label>
              <Funk required/>
            </div>
                    <div className="form-group">
                        <label className='form-group-label' htmlFor="name">Ism</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Elektron pochta</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div class="form-group">
                        <label htmlFor="address">Manzil</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>

                    

                    <button type="submit" className='checkout-btn'>Checkout</button>
                </form>
            ) : (
                // Tasdiqlash
                <div id="confirmation">
                    <h3>Tasdiqlandi</h3>
                    <p>Ism: {name}</p>
                    <p>Elektron pochta: {email}</p>
                    <p>Manzil: {address}</p>
                    <Link to='/' onClick={notify}>
                        <button className="cart-empty__button">
                        <Toaster
                            position="top-right"
                            reverseOrder={false}
                        />
                            Bosh menyuga qaytish</button>
                    </Link>
                </div>
            )}  
        </div>
    );
}

export default App;



