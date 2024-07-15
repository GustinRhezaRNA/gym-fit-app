import ExerciseCard from './ExerciseCard';
import SectionWrapper from './SectionWrapper';

export default function Workout(props) {
  const { workout } = props;
  // {console.log(workout)}
  return (
    <SectionWrapper
      id={'workout'}
      header={'WELCOME TO'}
      title={['The', 'DANGER', 'zone']}
    >
      <div className="flex flex-col gap-4">
        {console.log(workout)}
        {workout.map((exercise, i) => {
          return (
            <ExerciseCard
              i={i}
              exercise={exercise}
              key={i}
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
}
