export interface ISkill {
  name: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
}

interface Props {
  skills: ISkill[];
}

export const Skills = ({ skills }: Props) => {
  return (
    <div>
      {skills.map((s) => (
        <p key={s.name}>
          {s.name}: {s.rating}
        </p>
      ))}
    </div>
  );
};
