import React from "react";
import { FieldValues, useFieldArray, useFormContext } from "react-hook-form";
import InputMask from "react-input-mask";

import { CurriculumFormControl } from "@enums/curriculum.enum";
import { useCurriculum } from "@hooks/useCurriculum";
import { Curriculum } from "@interfaces/curriculum.interface";
import { errorMessageFormatter } from "@utils/form.validations";

const CurriculumForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isValid, errors },
  } = useFormContext();
  const { fields, append } = useFieldArray({ control, name: "experiences" });
  const { setCurriculums } = useCurriculum();
  const [showAlert, setShowAlert] = React.useState(false);

  const addExperience = () => {
    append("");
  };

  const onSubmit = (formData: FieldValues) => {
    setCurriculums((previousCurriculums) => [
      ...previousCurriculums,
      {
        ...formData,
        experiences: formData.experiences.map(
          (experience: { value: string }) => experience.value
        ),
      } as Curriculum,
    ]);
    reset();
    append("", { shouldFocus: false });
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 10000);
  };

  React.useEffect(() => {
    if (fields.length === 0) {
      append("", { shouldFocus: false });
    }
  }, []);

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      {showAlert && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Curriculum saved!
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}

      <div className="row">
        <div className="col">
          <label className="form-label" htmlFor={CurriculumFormControl.NAME}>
            Nome
          </label>
          <input
            className="form-control"
            type="text"
            {...register(CurriculumFormControl.NAME, { required: true })}
          />
          {errors.name && (
            <p style={{ color: "red" }}>
              {errorMessageFormatter(errors.name.type as unknown as string)}
            </p>
          )}
        </div>
        <div className="col">
          <label
            className="form-label"
            htmlFor={CurriculumFormControl.LAST_NAME}
          >
            Sobrenome
          </label>
          <input
            className="form-control"
            type="text"
            {...register(CurriculumFormControl.LAST_NAME, { required: true })}
          />
          {errors.lastName && (
            <p style={{ color: "red" }}>
              {errorMessageFormatter(errors.lastName.type as unknown as string)}
            </p>
          )}
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <label
            className="form-label"
            htmlFor={CurriculumFormControl.BIRTH_DATE}
          >
            Data de nascimento
          </label>
          <input
            className="form-control"
            type="date"
            {...register(CurriculumFormControl.BIRTH_DATE, { required: true })}
          />
          {errors.birthDate && (
            <p style={{ color: "red" }}>
              {errorMessageFormatter(
                errors.birthDate.type as unknown as string
              )}
            </p>
          )}
        </div>
        <div className="col">
          <label className="form-label" htmlFor={CurriculumFormControl.EMAIL}>
            Email
          </label>
          <input
            className="form-control"
            type="email"
            {...register(CurriculumFormControl.EMAIL, { required: true })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>
              {errorMessageFormatter(errors.email.type as unknown as string)}
            </p>
          )}
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <label className="form-label" htmlFor={CurriculumFormControl.CPF}>
            CPF
          </label>
          <InputMask
            className="form-control"
            type="text"
            mask="999.999.999-99"
            {...register(CurriculumFormControl.CPF, { required: true })}
          />
          {errors.cpf && (
            <p style={{ color: "red" }}>
              {errorMessageFormatter(errors.cpf.type as unknown as string)}
            </p>
          )}
        </div>
        <div className="col">
          <label
            className="form-label"
            htmlFor={CurriculumFormControl.CELLPHONE}
          >
            Telefone
          </label>
          <InputMask
            className="form-control"
            type="text"
            mask="(99) 99 99999-9999"
            {...register(CurriculumFormControl.CELLPHONE, { required: true })}
          />
          {errors.cellphone && (
            <p style={{ color: "red" }}>
              {errorMessageFormatter(
                errors.cellphone.type as unknown as string
              )}
            </p>
          )}
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <label className="form-label" htmlFor={CurriculumFormControl.GENDER}>
            Gênero
          </label>
          <select
            className="form-control"
            {...register(CurriculumFormControl.GENDER)}
          >
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
            <option value="O">Outro</option>
          </select>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2 mb-2">
        <p className="m-0">Experiências</p>
        <button
          type="button"
          className="btn btn-success"
          onClick={addExperience}
        >
          Adicionar experiência
        </button>
      </div>

      {fields.map((field, index) => (
        <textarea
          className="form-control mt-3"
          key={field.id}
          {...register(`experiences.${index}.value`)}
        />
      ))}

      <button className={`mt-2 btn btn-primary`}>Salvar</button>
    </form>
  );
};

export default CurriculumForm;
