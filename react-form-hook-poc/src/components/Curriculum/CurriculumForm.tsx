import React from "react";
import { FieldValues, useFieldArray, useFormContext } from "react-hook-form";

import { CurriculumFormControl } from "@enums/curriculum.enum";
import { useCurriculum } from "@hooks/useCurriculum";
import { Curriculum } from "@interfaces/curriculum.interface";

const CurriculumForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isValid },
  } = useFormContext();
  const { fields, append } = useFieldArray({ control, name: "experiences" });
  const { setCurriculums } = useCurriculum();

  const addExperience = () => {
    append("");
  };

  const onSubmit = (formData: FieldValues) => {
    const curriculum = formData as Curriculum;
    setCurriculums((previousCurriculums) => [
      ...previousCurriculums,
      curriculum,
    ]);
    reset();
  };

  React.useEffect(() => {
    append("", { shouldFocus: false });
  }, []);

  React.useEffect(() => {
    console.log(isValid);
  }, [isValid]);

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
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
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <label className="form-label" htmlFor={CurriculumFormControl.CPF}>
            CPF
          </label>
          <input
            className="form-control"
            type="text"
            {...register(CurriculumFormControl.CPF, { required: true })}
          />
        </div>
        <div className="col">
          <label
            className="form-label"
            htmlFor={CurriculumFormControl.CELLPHONE}
          >
            Telefone
          </label>
          <input
            className="form-control"
            type="text"
            {...register(CurriculumFormControl.CELLPHONE, { required: true })}
          />
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
