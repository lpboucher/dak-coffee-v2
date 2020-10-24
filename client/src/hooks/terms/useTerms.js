import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getTermBySlug, fetchOneTerm } from '../../ducks/terms';
import { getFAQGroups, fetchFAQs } from '../../ducks/faq';

export const useTerm = (slug) => {
  const dispatch = useDispatch()
  const term = useSelector(state => getTermBySlug(state, slug));

  useEffect(() => {
    if (!term) {
      dispatch(fetchOneTerm(slug));
    }
  }, [slug]);

  return {
    ...term,
    contentByLine: term ? term.content.split("#") : null,
  }
}

export const useFAQs = () => {
  const dispatch = useDispatch()
  const faqGroups = useSelector(state => getFAQGroups(state));

  useEffect(() => {
    if (Object.keys(faqGroups).length < 1) {
      dispatch(fetchFAQs());
    }
  }, []);

  return {
    ...faqGroups
  }
}
