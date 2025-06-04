import { BookOpen, Briefcase, CheckCircle2, Folder, Home } from 'lucide-react';
import { ReactNode, useState } from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';

type ListColor = 'blue' | 'green' | 'red' | 'purple' | 'amber' | 'black';
type ListIcon = 'personal' | 'work' | 'home' | 'study' | 'default';

interface CreateListFormProps {
    onSubmit: (name: string, color: ListColor, icon: ListIcon) => void;
    onCancel: () => void;
}

export function CreateListForm({ onSubmit, onCancel }: CreateListFormProps) {
    const [name, setName] = useState('');
    const [selectedColor, setSelectedColor] = useState<ListColor>('blue');
    const [selectedIcon, setSelectedIcon] = useState<ListIcon>('default');

    const colors: { value: ListColor; class: string; iconClass: string }[] = [
      { value: 'blue', class: 'bg-blue-500', iconClass: 'text-blue-500' },
      { value: 'green', class: 'bg-green-500', iconClass: 'text-green-500' },
      { value: 'red', class: 'bg-red-500', iconClass: 'text-red-500' },
      { value: 'purple', class: 'bg-purple-500', iconClass: 'text-purple-500' },
      { value: 'amber', class: 'bg-amber-500', iconClass: 'text-amber-500' },
      { value: 'black', class: 'bg-black', iconClass: 'text-black' },

    ];

    const icons: { value: ListIcon; icon: ReactNode }[] = [
        { value: 'default', icon: <Folder className="w-5 h-5" /> },
        { value: 'personal', icon: <CheckCircle2 className="w-5 h-5" /> },
        { value: 'work', icon: <Briefcase className="w-5 h-5" /> },
        { value: 'home', icon: <Home className="w-5 h-5" /> },
        { value: 'study', icon: <BookOpen className="w-5 h-5" /> },
    ];

    const handleSubmit = () => {
        if (name.trim()) {
            onSubmit(name.trim(), selectedColor, selectedIcon);
        }
    };

    return (
        <div className="p-4 space-y-4">
            <h3 className="text-lg font-medium">Create New List</h3>

            <div>
                <label className="block mb-1 text-sm font-medium">List Name</label>
                <Input
                    placeholder="Enter list name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mb-2"
                    autoFocus
                />
            </div>

            <div>
                <label className="block mb-2 text-sm font-medium">Color</label>
                <div className="flex gap-2 mb-4">
                    {colors.map((color) => (
                        <div
                            key={color.value}
                            className="w-8 h-8 cursor-pointer"
                            onClick={() => setSelectedColor(color.value)}
                        >
                            <div
                                className={`w-full h-full rounded-full flex items-center justify-center ${color.class}
                                    ${selectedColor === color.value ? 'ring-2 ring-offset-2 ring-gray-400' : 'opacity-80 hover:opacity-100'}`}
                            >
                                {selectedColor === color.value && (
                                    <CheckCircle2 className="w-5 h-5 text-white pointer-events-none" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <label className="block mb-2 text-sm font-medium">Icon</label>
                <div className="flex gap-2 mb-4">
                    {icons.map((iconObj) => {
                        const colorClass = colors.find(c => c.value === selectedColor)?.iconClass || '';
                        return (
                            <div
                                key={iconObj.value}
                                className="w-10 h-10 cursor-pointer"
                                onClick={() => setSelectedIcon(iconObj.value)}
                            >
                                <div
                                    className={`w-full h-full rounded-md flex items-center justify-center border transition-all
                                        ${selectedIcon === iconObj.value
                                        ? `border-2 ${selectedColor === 'black' ? 'border-black' :
                                            selectedColor === 'blue' ? 'border-blue-500' :
                                                selectedColor === 'green' ? 'border-green-500' :
                                                    selectedColor === 'red' ? 'border-red-500' :
                                                        selectedColor === 'purple' ? 'border-purple-500' :
                                                            'border-amber-500'
                                        } ${colorClass}`
                                            : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
                                >
                                    {iconObj.icon}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex justify-end pt-2 space-x-2">
                <Button variant="outline" onClick={onCancel}>
                    Cancel
                </Button>
                <Button
                    className={`bg-blue-500 hover:bg-blue-600 text-white`}
                    onClick={handleSubmit}
                    disabled={!name.trim()}
                >
                    Create List
                </Button>
            </div>
        </div>
    );
}
