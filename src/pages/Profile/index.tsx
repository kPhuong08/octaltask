import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Camera, Mail, Phone, User } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
  // Placeholder user data - would come from auth context in a real app
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    photoUrl: 'https://ui-avatars.com/api/?name=John+Doe&background=random',
  });

  // Placeholder state for edit mode
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
    // In a real app, you would call an API to update the user profile
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 py-4 shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 flex items-center">
          <Link
            to="/"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mr-4 rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-xl font-normal tracking-tight text-gray-800 dark:text-gray-200">
            Profile
          </h1>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-6 py-16 w-full">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white dark:bg-gray-800 shadow-sm border-none overflow-hidden">
            <CardHeader className="p-8 pb-6 border-b border-gray-100 dark:border-gray-700">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700 ring-4 ring-white dark:ring-gray-800">
                    <img
                      src={user.photoUrl}
                      alt={user.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute bottom-0 right-0 rounded-full p-2 shadow-sm"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <h2 className="text-xl font-normal text-gray-800 dark:text-gray-200">
                  {user.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
              </div>
            </CardHeader>

            <CardContent className="p-8 pt-6">
              {isEditing ? (
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                      Full Name
                    </label>
                    <div className="flex">
                      <span className="bg-gray-50 dark:bg-gray-700 p-2 rounded-l-md flex items-center border border-r-0 border-gray-200 dark:border-gray-600">
                        <User className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                      </span>
                      <Input
                        value={editedUser.name}
                        onChange={e => setEditedUser({ ...editedUser, name: e.target.value })}
                        className="rounded-l-none border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                      Email
                    </label>
                    <div className="flex">
                      <span className="bg-gray-50 dark:bg-gray-700 p-2 rounded-l-md flex items-center border border-r-0 border-gray-200 dark:border-gray-600">
                        <Mail className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                      </span>
                      <Input
                        value={editedUser.email}
                        onChange={e => setEditedUser({ ...editedUser, email: e.target.value })}
                        className="rounded-l-none border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                      Phone
                    </label>
                    <div className="flex">
                      <span className="bg-gray-50 dark:bg-gray-700 p-2 rounded-l-md flex items-center border border-r-0 border-gray-200 dark:border-gray-600">
                        <Phone className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                      </span>
                      <Input
                        value={editedUser.phone}
                        onChange={e => setEditedUser({ ...editedUser, phone: e.target.value })}
                        className="rounded-l-none border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end pt-4">
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={handleSave}
                    >
                      Save Changes
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="group flex items-center py-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/60 -mx-4 px-4 rounded transition-colors">
                    <User className="h-5 w-5 text-gray-400 dark:text-gray-500 mr-3" />
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                        Full Name
                      </div>
                      <div className="text-gray-900 dark:text-gray-200">{user.name}</div>
                    </div>
                  </div>

                  <div className="group flex items-center py-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/60 -mx-4 px-4 rounded transition-colors">
                    <Mail className="h-5 w-5 text-gray-400 dark:text-gray-500 mr-3" />
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                        Email
                      </div>
                      <div className="text-gray-900 dark:text-gray-200">{user.email}</div>
                    </div>
                  </div>

                  <div className="group flex items-center py-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/60 -mx-4 px-4 rounded transition-colors">
                    <Phone className="h-5 w-5 text-gray-400 dark:text-gray-500 mr-3" />
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                        Phone
                      </div>
                      <div className="text-gray-900 dark:text-gray-200">{user.phone}</div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => setIsEditing(true)}
                    >
                      Edit Profile
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
