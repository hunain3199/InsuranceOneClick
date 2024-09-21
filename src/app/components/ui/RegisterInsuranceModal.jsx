import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import TravelForm2 from "../Reauseable/travelform2nd";
import { HealthForm } from "../Reauseable/healthform";
import Form from "../../components/insurance/Auto/Form"
import BikeForm from "../../components/insurance/Bike/BikeForm"

const RegisterInsuranceModal = ({ open, handleClose }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [step, setStep] = useState(1);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const handleCategoryChange = (event) => {
    // console.log(event.target.value)
    setSelectedCategory(event.target.value);
  };

  const handleNextClick = () => {
    if (selectedCategory) {
      setStep(2);
    }
  };

  const handleFormSubmit = () => {
    // Add form validation if needed
    setStep(3);  // Move to the payment methods step
  };

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handleProceedToPaymentGateway = () => {
    if (selectedPaymentMethod) {
      // Add logic to redirect to payment gateway here
      console.log(`Proceeding to payment with method: ${selectedPaymentMethod}`);
    }
  };

  const renderFormForCategory = () => {
    switch (selectedCategory) {
      case "auto":
        return (
          <Box>
            <Form/>
          </Box>
        );
      case "bike":
        return (
          <Box>
            <BikeForm />
          </Box>
        );
      case "commercial":
        return (
          <Box>
            <Form/>
          </Box>
        );
      case "travel":
        return (
          <Box>
            <TravelForm2/>
          </Box>
        );
      case "health":
        return (
          <Box>
            <HealthForm/>
          </Box>
        );
      default:
        return null;
    }
  };

  const renderPaymentMethods = () => {
    return (
      <Box>
        <h3>Select Payment Method</h3>
        <RadioGroup
          aria-label="payment-method"
          name="payment-method"
          value={selectedPaymentMethod}
          onChange={handlePaymentMethodChange}
        >
          <FormControlLabel value="credit-card" control={<Radio />} label="Credit Card" />
          <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
          <FormControlLabel value="bank-transfer" control={<Radio />} label="Bank Transfer" />
          {/* Add more methods as necessary */}
        </RadioGroup>
      </Box>
    );
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '90%', maxHeight: 435 } }}
      maxWidth="md"
      open={open}
      onClose={handleClose}
    >
      <DialogTitle className="mx-auto text-center font-bold text-3xl">
        {step === 1 ? "Select Category" : step === 2 ? `${selectedCategory} Insurance Form` : "Payment Methods"}
      </DialogTitle>
      <DialogContent dividers>
        {step === 1 && (
          <RadioGroup
            aria-label="insurance-category"
            name="insurance-category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {['auto', 'bike', 'commercial', 'health', 'family', 'travel', 'life', 'general'].map((category) => (
              <FormControlLabel
                value={category}
                key={category}
                control={<Radio />}
                label={category}
              />
            ))}
          </RadioGroup>
        )}
        {step === 2 && (
          <Box mt={2}>
            {renderFormForCategory()}
          </Box>
        )}
        {step === 3 && (
          <Box mt={2}>
            {renderPaymentMethods()}
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        {step === 1 && <Button onClick={handleNextClick}>Next</Button>}
        {step === 2 && (
          <>
            <Button onClick={() => setStep(1)}>Back</Button>
            <Button onClick={handleFormSubmit}>Proceed to Payment</Button>
          </>
        )}
        {step === 3 && (
          <>
            <Button onClick={() => setStep(2)}>Back to Form</Button>
            <Button
              onClick={handleProceedToPaymentGateway}
              disabled={!selectedPaymentMethod}
            >
              Next
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default RegisterInsuranceModal;
