import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    position: '',
    eventType: '',
    dietaryRestrictions: '',
    emergencyContact: '',
    emergencyPhone: '',
    specialRequirements: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.eventType) newErrors.eventType = 'Please select an event type';
    if (!formData.emergencyContact.trim()) newErrors.emergencyContact = 'Emergency contact is required';
    if (!formData.emergencyPhone.trim()) newErrors.emergencyPhone = 'Emergency phone is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Simulate API call - replace with actual endpoint
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitMessage('Registration successful! You will receive a confirmation email shortly.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          organization: '',
          position: '',
          eventType: '',
          dietaryRestrictions: '',
          emergencyContact: '',
          emergencyPhone: '',
          specialRequirements: '',
          agreeToTerms: false
        });
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      setSubmitMessage('Registration failed. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const eventTypes = [
    'Conference',
    'Workshop',
    'Seminar',
    'Networking Event',
    'Training Session',
    'Product Launch',
    'Team Building',
    'Other'
  ];

  return (
    <section className="min-h-screen bg-white/95 p-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Event Registration</h2>
          <p className="text-gray-700">Please fill out the form below to register for our upcoming event</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
            <div className="form-grid">
              {/* Personal Information */}
              <div className="form-section">
                <h3>Personal Information</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={errors.firstName ? 'error' : ''}
                    />
                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={errors.lastName ? 'error' : ''}
                    />
                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              </div>

              {/* Professional Information */}
              <div className="form-section">
                <h3>Professional Information</h3>
                
                <div className="form-group">
                  <label htmlFor="organization">Organization/Company</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="position">Position/Title</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Event Details */}
              <div className="form-section">
                <h3>Event Details</h3>
                
                <div className="form-group">
                  <label htmlFor="eventType">Event Type *</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className={errors.eventType ? 'error' : ''}
                  >
                    <option value="">Select an event type</option>
                    {eventTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.eventType && <span className="error-message">{errors.eventType}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="dietaryRestrictions">Dietary Restrictions/Allergies</label>
                  <textarea
                    id="dietaryRestrictions"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Please list any dietary restrictions or allergies"
                  />
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="form-section">
                <h3>Emergency Contact</h3>
                
                <div className="form-group">
                  <label htmlFor="emergencyContact">Emergency Contact Name *</label>
                  <input
                    type="text"
                    id="emergencyContact"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    className={errors.emergencyContact ? 'error' : ''}
                  />
                  {errors.emergencyContact && <span className="error-message">{errors.emergencyContact}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="emergencyPhone">Emergency Contact Phone *</label>
                  <input
                    type="tel"
                    id="emergencyPhone"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                    className={errors.emergencyPhone ? 'error' : ''}
                  />
                  {errors.emergencyPhone && <span className="error-message">{errors.emergencyPhone}</span>}
                </div>
              </div>

              {/* Special Requirements */}
              <div className="form-section">
                <h3>Additional Information</h3>
                
                <div className="form-group">
                  <label htmlFor="specialRequirements">Special Requirements or Requests</label>
                  <textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Please let us know of any special requirements or requests"
                  />
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="form-section terms-section">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                />
                <span>
                  I agree to the terms and conditions and privacy policy *
                </span>
              </label>
              {errors.agreeToTerms && <span className="error-message">{errors.agreeToTerms}</span>}
            </div>

            {/* Submit Button */}
            <div className="form-actions">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? 'Registering...' : 'Register Now'}
              </button>
            </div>

            {submitMessage && (
              <div className={`submit-message ${submitMessage.includes('successful') ? 'success' : 'error'}`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </section>
  );
};

export default Registration;
