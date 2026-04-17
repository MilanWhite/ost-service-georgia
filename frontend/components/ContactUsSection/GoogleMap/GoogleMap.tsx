const GoogleMap = () => {
    return (
        <div className="w-full mt-10 h-64 rounded-lg overflow-hidden shadow">
            <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.175224931549!2d44.772498299999995!3d41.7167376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044732917885591%3A0x3ef2838eae2a92f3!2s21a%20Viktor%20Dolidze%20St%2C%20T&#39;bilisi%2C%20Georgia!5e0!3m2!1sen!2sca!4v1776392019074!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
            />
        </div>
    );
};

export default GoogleMap;
