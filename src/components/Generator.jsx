import { useState, useEffect } from 'react';
import SectionWrapper from './SectionWrapper';
import { SCHEMES, WORKOUTS } from '../utils/exercises';
import Button from './Button';

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2 ">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">{index}</p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

export default function Generator(props) {
  const { poison, setPoison, muscles, setMuscles, goal, setGoal, updateWorkout } = props;

  let [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  function updateMuscles(muscleGroup) {
    // if (muscles.includes(muscleGroup)) {
    //   setMuscles(muscles.filter((val) => val !== muscleGroup));
    //   return;
    // }

    // if (muscles.length > 2) {
    //   return;
    // }

    // //mangsud??
    // if (poison !== 'individual') {
    //   setMuscles([muscleGroup]);
    //   setShowModal(false)
    //   return;
    // }

    // setMuscles([...muscles, muscleGroup]);
    // if (muscles.length === 2) {
    //   setShowModal(false)
    // }

    //Lebih readable dan sesuai
    setMuscles((prevMuscles) => {
      // Jika muscleGroup sudah ada di dalam array, hapus dari array
      if (prevMuscles.includes(muscleGroup)) {
        return prevMuscles.filter((val) => val !== muscleGroup);
      }

      // Jika panjang array lebih dari 3, jangan tambahkan item baru
      if (prevMuscles.length > 3) {
        return prevMuscles;
      }

      // Jika poison bukan 'individual', ganti seluruh array dengan item baru
      if (poison !== 'individual') {
        setShowModal(false);
        return [muscleGroup];
      }

      // Tambahkan item baru ke dalam array
      const newMuscles = [...prevMuscles, muscleGroup];

      // Jika panjang array adalah 3 setelah penambahan, tutup modal
      if (newMuscles.length === 3) {
        setShowModal(false);
      }

      return newMuscles;
    });
  }

  // useEffect(() => {
  //   console.log(poison);
  // }, [poison]);

  return (
    <SectionWrapper
      id={'generate'}
      header={'Generate your workout'}
      title={["It's", 'Huge', "o'clock"]}
    >
      <Header
        index={'01'}
        title={'Pick ur poison'}
        description={'Select the workout u wish to enjoy.'}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setMuscles([]);
                setPoison(type);
                // console.log(poison);
              }}
              className={'bg-slate-950 border border-blue-400 px-4 py-3 rounded-lg hover:border-blue-600 duration-200' + (type == poison ? ' border-blue-600' : ' border-blue-400"')}
              key={typeIndex}
            >
              <p className="capitalize">{type.replaceAll('_', ' ')}</p>
            </button>
          );
        })}
      </div>
      <Header
        index={'02'}
        title={'Lock on targets'}
        description={'Select the muscle judge for annihilation.'}
      />
      <div className="bg-slate-950  border border-solid border-blue-400 rounded-lg flex flex-col">
        <button
          onClick={toggleModal}
          className="relative p-3 flex items-center justify-center"
        >
          <p className="capitalize">{muscles.length == 0 ? ' Select Muscle Groups' : muscles.join(' ')}</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModal && (
          <div className="flex flex-col px-3 pb-3">
            {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  onClick={() => {
                    updateMuscles(muscleGroup);
                  }}
                  className={'hover:text-blue-400 duration-200' + (muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')}
                  key={muscleGroupIndex}
                >
                  <p className="uppercase">{muscleGroup.replaceAll('_', ' ')}</p>
                </button>
              );
            })}
          </div>
        )}
      </div>
      <Header
        index={'03'}
        title={'Become Jeggernaut'}
        description={'Select your ultimate objective.'}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => {
                setGoal(scheme);
                // console.log(poison);
              }}
              className={'bg-slate-950 border border-blue-400 px-4 py-3 rounded-lg hover:border-blue-600 duration-200' + (scheme == goal ? ' border-blue-600' : ' border-blue-400"')}
              key={schemeIndex}
            >
              <p className="capitalize">{scheme.replaceAll('_', ' ')}</p>
            </button>
          );
        })}
      </div>

      <Button
        func={updateWorkout}
        text={'Formulate'}
      ></Button>
    </SectionWrapper>
  );
}
