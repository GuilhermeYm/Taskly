interface TaskFormProps {
  onClose: () => void;
}

export default function TaskForm({ onClose }: TaskFormProps) {
  return (
    // Overlay escuro que cobre toda a tela
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* Formulário centralizado */}
      <div
        className="bg-background shadow-md rounded-lg p-6 w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        teste
      </div>
    </div>
  );
}
