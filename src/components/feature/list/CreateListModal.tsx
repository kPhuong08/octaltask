import { X } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card } from '../../ui/card';
import { CreateListForm } from './CreateListForm';



type ListColor = 'blue' | 'green' | 'red' | 'purple' | 'amber' | 'black';
type ListIcon = 'personal' | 'work' | 'home' | 'study' | 'default';

interface CreateListModalProps {
    onClose: () => void;
    onCreateList: (name: string, color: ListColor, icon: ListIcon) => void;
}

export function CreateListModal({ onClose, onCreateList }: CreateListModalProps) {
    const handleSubmit = (name: string, color: ListColor, icon: ListIcon) => {
        onCreateList(name, color, icon);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
            <Card className="relative w-full max-w-md overflow-hidden shadow-lg">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="absolute right-2 top-2"
                >
                    <X className="w-6 h-4" />
                </Button>

                <CreateListForm onSubmit={handleSubmit} onCancel={onClose} />
            </Card>
        </div>
    );
}
