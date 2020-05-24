import { useEffect } from "react";
import { useDispatch } from 'react-redux';

export const useSnipcartEvents = (updating, update, clear, added, completed) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if( navigator.userAgent !== 'ReactSnap') {
      window.Snipcart.subscribe('item.adding', (ev, item, items) => {
          dispatch(updating(item.id));
      });
      window.Snipcart.subscribe('item.added', (item) => {
          dispatch(update(item));
          added(item);
      });
      window.Snipcart.subscribe('item.updated', (item) => {
          dispatch(update());
      });
      window.Snipcart.subscribe('item.removed', (item) => {
          dispatch(update());
      });
      window.Snipcart.subscribe('order.completed', (data) => {
          if(data.status === "Processed") {
            dispatch(clear());
            completed(data);
          }
      });
    }

    return () => {
      if( navigator.userAgent !== 'ReactSnap') {
        window.Snipcart.unsubscribe('item.added');
        window.Snipcart.unsubscribe('item.adding');
        window.Snipcart.unsubscribe('item.updated');
        window.Snipcart.unsubscribe('item.removed');
        window.Snipcart.unsubscribe('order.completed');
      }
    };
  }, []);
};

export const useSnipcartCart = (initialize) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if( navigator.userAgent !== 'ReactSnap') {
      window.Snipcart.subscribe('cart.ready', async (data) => {
        dispatch(await initialize(data))
      })
      window.Snipcart.api.configure('show_cart_automatically', false);
    }

    return () => {
      if( navigator.userAgent !== 'ReactSnap') {
        window.Snipcart.unsubscribe('cart.ready');
      }
    };
  }, [])
};

export const useSnipcartAuth = (login) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if( navigator.userAgent !== 'ReactSnap') {
      window.Snipcart.subscribe('authentication.success', (email) => {
        dispatch(login());
      });
    }

    return () => {
      if( navigator.userAgent !== 'ReactSnap') {
        window.Snipcart.unsubscribe('authentication.success');
      }
    };
  }, [])
};
