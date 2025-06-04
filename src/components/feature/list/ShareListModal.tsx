import { SharedUser, TaskList } from '@/types/task';
import { Check, Copy, UserPlus, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { Button } from '../../ui/button';
import { Card } from '../../ui/card';
import { Input } from '../../ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../../ui/select';

interface ShareListModalProps {
    list: TaskList;
    onClose: () => void;
    onShare: (list: TaskList, email: string, role: 'viewer' | 'editor' | 'admin') => void;
    onUpdatePermission: (list: TaskList, userId: string, role: 'viewer' | 'editor' | 'admin') => void;
    onRemoveUser: (list: TaskList, userId: string) => void;
}

export function ShareListModal({
    list,
    onClose,
    onShare,
    onUpdatePermission,
    onRemoveUser
}: ShareListModalProps) {
    const [email, setEmail] = useState('');
    const [role, setRole] = useState<'viewer' | 'editor' | 'admin'>('viewer');
    const [copySuccess, setCopySuccess] = useState(false);
    const [sharedUsers, setSharedUsers] = useState<SharedUser[]>(list.sharedWith || []);

    // Reset copied message after 2 seconds
    useEffect(() => {
        if (copySuccess) {
            const timer = setTimeout(() => setCopySuccess(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [copySuccess]);

    // const handleShare = () => {
    //     if (email.trim() && email.includes('@')) {
    //         onShare(list, email, role);
    //         setEmail('');
    //     }
    // };

    const handleShare = () => {
        if (email.trim() && email.includes('@')) {
            onShare(list, email, role);
            addSharedUser({
                id: Date.now().toString(), // hoặc ID thực trả về từ backend
                email,
                name: email.split('@')[0],
                role,
                photoUrl: '', // nếu có
            });
            setEmail('');
        }
    };

    const copyShareLink = () => {
        // sharing link with list id
        const shareLink = `https://octaltask.com/share/list/${list.id}`;
        navigator.clipboard.writeText(shareLink);
        setCopySuccess(true);
    };


    const addSharedUser = (newUser: SharedUser) => {
        setSharedUsers(prev => [...prev, newUser]);
    };

    // const getRoleName = (role: string) => {
    //     switch (role) {
    //         case 'viewer': return 'Viewer';
    //         case 'editor': return 'Editor';
    //         case 'admin': return 'Admin';
    //         default: return 'Unknown role';
    //     }
    // };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
            <Card className="relative w-full max-w-md overflow-hidden shadow-lg">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-medium">Share list: {list.name}</h2>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={onClose}
                            className="w-8 h-8 p-0 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <X className="w-4 h-4" />
                        </Button>
                    </div>

                    <div className="space-y-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Add people
                            </label>
                            <div className="flex gap-2">
                                <Input
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1 h-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <Select
                                    value={role}
                                    onValueChange={(value) => setRole(value as 'viewer' | 'editor' | 'admin')}
                                >
                                    <SelectTrigger className="w-[110px] h-10 border-gray-300 dark:border-gray-600">
                                        <SelectValue placeholder="Role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="viewer">Viewer</SelectItem>
                                        <SelectItem value="editor">Editor</SelectItem>
                                        <SelectItem value="admin">Admin</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button
                                className="w-full h-10 mt-1 text-white bg-blue-600 hover:bg-blue-700"
                                onClick={handleShare}
                                disabled={!email.trim() || !email.includes('@')}
                            >
                                <UserPlus className="w-4 h-4 mr-2" />
                                Share
                            </Button>
                        </div>

                        <div className="flex items-center gap-3 mt-6">
                            <div className="flex-grow h-px bg-gray-200 dark:bg-gray-700"></div>
                            <span className="text-xs font-medium text-gray-500">OR</span>
                            <div className="flex-grow h-px bg-gray-200 dark:bg-gray-700"></div>
                        </div>

                        <Button
                            variant="outline"
                            className="w-full h-10 text-gray-700 border-gray-300 dark:border-gray-600 dark:text-gray-300"
                            onClick={copyShareLink}
                        >
                            {copySuccess ? (
                                <>
                                    <Check className="w-4 h-4 mr-2 text-green-500" />
                                    <span>Copied link</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="w-4 h-4 mr-2" />
                                    <span>Copy link</span>
                                </>
                            )}
                        </Button>

                        <div className="mt-6">
                            <h3 className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">People with access</h3>

                            <div className="space-y-3 max-h-[200px] overflow-y-auto pr-1">
                                {/* Owner */}
                                <div className="flex items-center justify-between py-2">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="w-8 h-8 bg-blue-100 border border-blue-200">
                                            <AvatarImage src="/avatar-placeholder.png" alt="Owner" />
                                            <AvatarFallback className="font-medium text-blue-800 bg-blue-100">O</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">You (Owner)</p>
                                            <p className="text-xs text-gray-500">your.email@example.com</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Shared users */}
                                {sharedUsers.map(user => (
                                    <div key={user.id} className="flex items-center justify-between py-2 group">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="w-8 h-8 bg-gray-100 border border-gray-200">
                                                <AvatarImage src={user.photoUrl || '/avatar-placeholder.png'} alt={user.name} />
                                                <AvatarFallback className="font-medium text-gray-800 bg-gray-100">{user.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{user.name}</p>
                                                <p className="text-xs text-gray-500">{user.email}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Select
                                                value={user.role}
                                                onValueChange={(value) => {
                                                    onUpdatePermission(list, user.id, value as 'viewer' | 'editor' | 'admin');
                                                }}
                                            >
                                                <SelectTrigger className="h-8 text-xs w-[90px] border-gray-200 dark:border-gray-700">
                                                    <SelectValue placeholder="Role" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="viewer">Viewer</SelectItem>
                                                    <SelectItem value="editor">Editor</SelectItem>
                                                    <SelectItem value="admin">Admin</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="w-8 h-8 p-0 transition-all rounded-full opacity-0 group-hover:opacity-100 hover:bg-red-50 hover:text-red-500"
                                                onClick={() => onRemoveUser(list, user.id)}
                                            >
                                                <X className="h-3.5 w-3.5" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}

                                {sharedUsers.length === 0 && (
                                    <div className="py-2 text-sm text-center text-gray-500">
                                        No one has been added yet
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
