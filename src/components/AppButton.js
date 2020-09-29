import React from "react";

export default function AppButton({text, loading, onClick}) {
    return (
        <button id="btn-submit" onClick={onClick}>{loading ? 'Saving...' : (text || '')}</button>
    );
};