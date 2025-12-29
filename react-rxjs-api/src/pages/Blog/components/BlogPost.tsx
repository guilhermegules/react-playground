type PostProps = {
  title: string;
  body: string;
  id: number;
  onClick: (id?: number) => void;
};

export const BlogPost = ({ title, body, id, onClick }: PostProps) => {
  return (
    <div onClick={() => onClick(id)} style={{ cursor: "pointer" }}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};
