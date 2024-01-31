import React from 'react';

export default function AulaUm() {
  const [termos, setTermos] = React.useState(false);

  return (
    <div>
      <form>
        <label>
          <input
            type="checkbox"
            value="termos"
            checked={termos}
            onChange={({ target }) => setTermos(target.checked)}
          />
          aceito os temos.
        </label>
      </form>
      {termos && <p>termos aceitos.</p>}
    </div>
  );
}
