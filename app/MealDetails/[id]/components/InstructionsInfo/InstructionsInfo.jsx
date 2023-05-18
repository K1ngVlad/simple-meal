import Image from 'next/image';
import check from '../../../../assets/check.svg';
import s from './InstructionsInfo.module.css';

const InstructionsInfo = ({ strInstructions }) => {
  const instructions = strInstructions.split('\n');
  return (
    <div className={s.instructionsInfo}>
      <h3>Instructions:</h3>
      <ul className={s.instructions}>
        {instructions.map(
          (instruction) =>
            instruction.trim() && (
              <li className={s.instruction}>
                <Image
                  draggable={false}
                  src={check}
                  width={20}
                  height={20}
                  alt="Picture of the author"
                  className={s.check}
                />
                <span className={s.info}>{instruction}</span>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export { InstructionsInfo };
