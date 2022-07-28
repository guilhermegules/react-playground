import { useCurriculum } from "@hooks/useCurriculum";

const CurriculumList = () => {
  const { curriculums } = useCurriculum();

  return (
    <section>
      <ul>
        {curriculums.map((curriculum) => (
          <li>{curriculum.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default CurriculumList;
