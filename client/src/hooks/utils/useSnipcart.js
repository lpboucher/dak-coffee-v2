import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getTotalTaxesPaid } from "../../utils/taxes/helper";

export const useSnipcartEvents = (updating, update, clear, added, completed) => {
  const dispatch = useDispatch();
  let itemAddingUnSub;
  let itemAddedUnSub;
  let itemUpdatedUnSub;
  let itemRemovedUnSub;
  let orderCompletedUnSub;

  useEffect(() => {
    if( navigator.userAgent !== 'ReactSnap') {
      document.addEventListener('snipcart.ready', () => {
        itemAddingUnSub = window.Snipcart.events.on('item.adding', (item) => {
            dispatch(updating(item.id));
        });
        itemAddedUnSub = window.Snipcart.events.on('item.added', (item) => {
            console.log("item added", item);
            dispatch(update(item));
            added(item);
        });
        itemUpdatedUnSub = window.Snipcart.events.on('item.updated', (item) => {
            console.log("item added, but updated", item);
            item ? dispatch(update(item)) : dispatch(update());
        });
        itemRemovedUnSub = window.Snipcart.events.on('item.removed', (item) => {
            dispatch(update());
        });
        orderCompletedUnSub = window.Snipcart.events.on('cart.confirmed', (cartState) => {
            // Completed
            if(cartState.status === 3) {
              dispatch(clear());
              completed(cartState, getTotalTaxesPaid(cartState.taxes.items));
            }
        });
      })
    }

    return () => {
      if( navigator.userAgent !== 'ReactSnap') {
        itemAddingUnSub();
        itemAddedUnSub();
        itemUpdatedUnSub();
        itemRemovedUnSub();
        orderCompletedUnSub();
      }
    };
  }, []);
};

export const useSnipcartCart = (initialize) => {
  const dispatch = useDispatch();
  let cartReadyUnSub;

  useEffect(() => {
    if( navigator.userAgent !== 'ReactSnap') {
      document.addEventListener('snipcart.ready', () => {
        cartReadyUnSub = window.Snipcart.events.on('snipcart.initialized', async (data) => {
          dispatch(await initialize(data))
        })
      });
    }

    return () => {
      if( navigator.userAgent !== 'ReactSnap') {
        cartReadyUnSub();
      }
    };
  }, [])
};

export const useSnipcartAuth = (login) => {
  const dispatch = useDispatch();
  let authSuccessUnSub;

  useEffect(() => {
    if( navigator.userAgent !== 'ReactSnap') {
      authSuccessUnSub = window.Snipcart.events.on('authentication.success', (email) => {
        dispatch(login());
      });
    }

    return () => {
      if( navigator.userAgent !== 'ReactSnap') {
        authSuccessUnSub();
      }
    };
  }, [])
};
