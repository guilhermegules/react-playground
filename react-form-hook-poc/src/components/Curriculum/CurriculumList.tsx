import { useCurriculum } from "@hooks/useCurriculum";
import { Curriculum } from "@interfaces/curriculum.interface";

const CurriculumList = () => {
  const { curriculums } = useCurriculum();

  const dateFormatter = (date: string) => {
    return new Date(date).toLocaleDateString("pt-BR");
  };

  const genderFormatter = (gender: string) => {
    const genders: Record<string, string> = {
      F: "Feminino",
      M: "Masculino",
      O: "Outro",
    };

    return genders[gender];
  };

  const createFile = (curriculum: Curriculum) => {
    const blob = new Blob([JSON.stringify(curriculum)], {
      type: "application/json",
    });
    const fileName = `${curriculum.name}-${
      curriculum.lastName
    }-${new Date().toISOString()}.json`;
    const file = new File([blob], fileName);
    return {
      fileName: `${file.name}.${file.type}`,
      fileUrl: URL.createObjectURL(file),
    };
  };

  return (
    <section className="container">
      <div className="row">
        {curriculums.map((curriculum) => (
          <div className="card col-4 m-3" key={Math.random() * 10000}>
            <div className="card-body">
              <h3 className="card-title">
                {curriculum.name}, {curriculum.lastName}
              </h3>
              <p>{curriculum.cellphone}</p>
              <p>{curriculum.email}</p>
              <p>{dateFormatter(curriculum.birthDate)}</p>
              <p>{genderFormatter(curriculum.gender)}</p>
              <p>{curriculum.experiences.join(", ")}</p>
              <a
                href={createFile(curriculum).fileUrl}
                className="btn btn-primary"
                download={createFile(curriculum).fileName}
              >
                Baixar
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurriculumList;
