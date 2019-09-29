import "./register-media.css";
import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import { sendMedia } from "../../repository/media/MediaRepository";
import CustomizedSnackbars from "../../utils/messages/CustomizedSnackbars";
import ConfirmAnimation from "../../components/custom-lottie/ComfirmAnimation";

const RegisterMedia = () => {
  const [checked, setChecked] = useState(false);
  const [validationRating, setValidationRating] = useState(false);
  const [form, setValues] = useState({
    mediaType: "Filme",
    mediaName: "",
    ratingMedia: 0,
    seasonsAmount: 0
  });

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const changeRating = newRating => {
    setValues({
      ...form,
      ratingMedia: newRating
    });
  };

  const validationEmptyFields = () => {
    if (form.ratingMedia !== 0) {
      setValidationRating(false);
      sendMedia(form).then(response => {
        if (response.code === 200) {
          setChecked(true);
          setTimeout(() => setChecked(false), 900);
        }
      });
    } else {
      setValidationRating(true);
      setChecked(false);
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    validationEmptyFields();
  };

  return (
    <div style={{ flex: 1 }}>
      <p className="title">Cadastrar uma nova media</p>

      <form onSubmit={e => handleSubmitForm(e)}>
        <InputLabel htmlFor="mediaTypeLabel" required>
          Tipo da mídia
        </InputLabel>
        <Select
          fullWidth
          required
          name="mediaType"
          onChange={updateField}
          value={form.mediaType}
        >
          <MenuItem value={"Filme"}>Filme</MenuItem>
          <MenuItem value={"Serie"}>Serie</MenuItem>
        </Select>
        <TextField
          fullWidth
          required
          label="Nome"
          name="mediaName"
          value={form.mediaName}
          onChange={updateField}
        />
        <TextField
          fullWidth
          required
          type="number"
          inputProps={{ min: "1", max: "100" }}
          name="seasonsAmount"
          onChange={updateField}
          label="Continuações"
        />
        <InputLabel htmlFor="ratingLabel" required className="text">
          Nota
        </InputLabel>
        <StarRatings
          rating={form.ratingMedia}
          name="rating"
          changeRating={changeRating}
          starRatedColor="#3f51b5"
          starHoverColor="#ffd700"
          numberOfStars={5}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "15px" }}
        >
          Salvar
        </Button>
      </form>

      <ConfirmAnimation hidden={!checked} />
      <CustomizedSnackbars
        open={validationRating}
        variant="error"
        message="Ops.. Para continuar o cadastro é necessário fazer uma avaliação!"
      />
    </div>
  );
};

export default RegisterMedia;
