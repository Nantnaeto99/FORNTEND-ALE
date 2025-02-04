import React from 'react';
import "../assets/styles/ContactForm.css";

const Contact: React.FC = () => {
    const [result, setResult] = React.useState<string>('');

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult('Sending...');
        const formData = new FormData(event.currentTarget);

        formData.append('access_key', '8915bba3-056a-4f19-addd-4b7217816d0d'); // Replace with your Web3Forms access key

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult('Form Submitted Successfully');
            event.currentTarget.reset();
        } else {
            console.error('Error', data);
            setResult(data.message);
        }
    };

    return (
        <div className="contact-form">
            <h3>Contact Us Now</h3>
            <form onSubmit={onSubmit}>
                <h4>Send a message</h4>
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <textarea name="message" placeholder="Message" required></textarea>
                <button type="submit">Submit Form</button>
            </form>
            <span>{result}</span>
        </div>
    );
};

export default Contact;
