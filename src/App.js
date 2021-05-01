import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deletePhotos, loadPhotos} from "./actions";


function App(props) {

  const photos = useSelector(state => state.photos)
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPhotos());
  }, [])

  const handleDelete = (id) => {
    dispatch(deletePhotos(id))
  }

  return (
      <div className='container'>
        {loading ? 'Идет загрузка...' : (
            photos.map(photo => {
                  return (
                      <div className='photo'>
                        <div>
                          <img className='img'
                               src={photo.url}
                               alt={"photo"}/>
                        </div>
                        <div>
                          <button className='btn' onClick={() => handleDelete(photo.id)}>
                            Удалить фото
                          </button>
                        </div>
                      </div>
                  )
                }
            ))
        }
      </div>
  );
}

export default App;