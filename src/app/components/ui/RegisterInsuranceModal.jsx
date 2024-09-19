import React, { useState } from "react";
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

const RegisterInsuranceModal = ({ open, handleClose }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleNextClick = () => {
    if (selectedCategory) {
      setShowForm(true);
    }
  };

  const renderFormForCategory = () => {
    switch (selectedCategory) {
      case "auto":
        return (
          <Box>
            <TextField label="Auto Insurance Details" fullWidth margin="normal" />
            {/* Add more fields for 'auto' category */}
          </Box>
        );
      case "bike":
        return (
          <Box>
            <TextField label="Bike Insurance Details" fullWidth margin="normal" />
            {/* Add more fields for 'bike' category */}
          </Box>
        );
      case "commercial":
        return (
          <Box>
            <TextField label="Commercial Insurance Details" fullWidth margin="normal" />
            {/* Add more fields for 'commercial' category */}
          </Box>
        );
      // Add cases for other categories as needed
      default:
        return null;
    }
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="sm"
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>Select Category</DialogTitle>
      <DialogContent dividers>
        {!showForm ? (
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
        ) : (
          <Box mt={2}>
            {renderFormForCategory()}
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        {!showForm ? (
          <Button onClick={handleNextClick}>Next</Button>
        ) : (
          <Button onClick={() => setShowForm(false)}>Back</Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default RegisterInsuranceModal;
