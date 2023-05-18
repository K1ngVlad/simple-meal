import Image from 'next/image';
import spoon from '../../../../assets/spoon.svg';
import s from './MeasureInfo.module.css';

const MeasureInfo = ({ measures }) => {
  return (
    <div className={s.measureInfo}>
      <h3>Measure:</h3>
      <div className={s.box}>
        {measures.map((measure, index) => (
          <div key={index} className={s.measure}>
            <Image
              draggable={false}
              src={spoon}
              width={25}
              height={25}
              alt="Picture of the author"
              className={s.spoon}
            />
            <span>{measure}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { MeasureInfo };
