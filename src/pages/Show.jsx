import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getShowById } from '../api/tvmaze';

const Show = () => {
  const { showId } = useParams();
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
  });

  if (showError) {
    return <div>We have an error: {showError.message}</div>;
  }

  if (showData) {
    return <div>Got show data: {showData.name}</div>;
  }

  return <div>Data is loading</div>;
};

export default Show;
