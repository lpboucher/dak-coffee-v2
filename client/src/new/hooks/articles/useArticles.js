import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import {
  fetchArticles,
  fetchOneArticle,
  getArticle,
  getArticleBySlug,
  getArticles
} from '../../../ducks/articles';

export const useArticles = () => {
  const dispatch = useDispatch();
  const articleIds = useSelector(state => getArticles(state));

  useEffect(() => {
    if (!articleIds || (articleIds && articleIds.length < 1)) {
      dispatch(fetchArticles());
    }
  }, []);

  return {
    articleIds,
  }
}

export const useSingleArticle = (articleId) => {
  const article = useSelector(state => getArticle(state, articleId));

  return {
    ...article,
  }
}

export const useSingleArticlePage = (slug) => {
  const dispatch = useDispatch();
  const article = useSelector(state => getArticleBySlug(state, slug));

  useEffect(() => {
    if (!article) {
      dispatch(fetchOneArticle(slug));
    }
  }, [slug]);

  return {
    ...article,
  }
}
