function Pagination({ page, onPrev, onNext, disablePrev, disableNext }) {
  return (
    <div className="pagination">
      <button className="btn" onClick={onPrev} disabled={disablePrev}>
        ◀ Page précédente
      </button>

      <span className="pagination-page">Page {page}</span>

      <button className="btn" onClick={onNext} disabled={disableNext}>
        Page suivante ▶
      </button>
    </div>
  )
}

export default Pagination