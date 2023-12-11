import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTime } from '../slicers/time_slicer';
import { RootState } from '../../app/store'; // Adjusted import path

const RealTime = () => {
  const dispatch = useDispatch();
  const time = useSelector((state: RootState) => state.clock.time);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(updateTime());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  return (
    <div>
      {time}
    </div>
  );
}

export default RealTime;