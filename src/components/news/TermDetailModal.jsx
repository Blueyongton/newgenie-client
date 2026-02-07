import React, { useEffect, useState } from "react";
import Modal from "../common/Modal";
import { getSentenceTerms } from "../../apis/newsApi";

export default function TermDetailModal({
  isOpen,
  term,
  articleId,
  sentenceId,
  onClose,
}) {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isOpen || !term?.id || articleId == null || sentenceId == null) return;

    setLoading(true);
    setError(null);
    getSentenceTerms(articleId, sentenceId, true)
      .then((data) => {
        const terms = data?.terms ?? Array.isArray(data) ? data : [];
        const found = terms.find((t) => String(t.id) === String(term.id));
        setDetail(found);
      })
      .catch((err) => setError(err.message || "상세 설명을 불러오지 못했습니다."))
      .finally(() => setLoading(false));
  }, [isOpen, term?.id, articleId, sentenceId]);

  if (!term) return null;

  const title = `${term.term}이란?`;
  const content = loading
    ? "불러오는 중..."
    : error
    ? error
    : detail?.detail ?? detail?.longDescription ?? detail?.description ?? "";

  return (
    <Modal
      isOpen={isOpen}
      title={title}
      content={content}
      onClose={onClose}
    />
  );
}
