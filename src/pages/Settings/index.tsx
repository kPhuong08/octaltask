import { Footer } from '@/components/common/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import { ArrowLeft, Bell, EyeOff, Globe, Moon, Smartphone } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Settings() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [settings, setSettings] = useState({
    notifications: true,
    emailNotifications: true,
    language: 'English',
    privacy: {
      showCompleted: true,
      showTaskDetails: true,
    },
  });

  const toggleSetting = (key: keyof typeof settings) => {
    if (typeof settings[key] === 'boolean') {
      setSettings({ ...settings, [key]: !settings[key] });
    }
  };

  const togglePrivacySetting = (key: keyof typeof settings.privacy) => {
    setSettings({
      ...settings,
      privacy: {
        ...settings.privacy,
        [key]: !settings.privacy[key],
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 py-4 shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 flex items-center">
          {/* better logic here */}
          <Link
            to="/tasks"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mr-4 rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-xl font-normal tracking-tight text-gray-800 dark:text-gray-200">
            Settings
          </h1>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-6 py-16 w-full">
        <div className="max-w-2xl mx-auto space-y-8">
          <Card className="bg-white dark:bg-gray-800 shadow-sm border-none overflow-hidden">
            <CardHeader className="p-6 pb-2">
              <CardTitle className="text-lg font-normal flex items-center text-gray-800 dark:text-gray-200">
                <Moon className="h-5 w-5 mr-3 text-gray-400 dark:text-gray-500" />
                Appearance
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-4">
              <div className="flex items-center justify-between py-2">
                <div>
                  <div className="font-medium text-gray-800 dark:text-gray-200">Dark Mode</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Use dark theme</div>
                </div>
                <div>
                  <button
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                      darkMode ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                    onClick={toggleDarkMode}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        darkMode ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-sm border-none overflow-hidden">
            <CardHeader className="p-6 pb-2">
              <CardTitle className="text-lg font-normal flex items-center text-gray-800 dark:text-gray-200">
                <Bell className="h-5 w-5 mr-3 text-gray-400 dark:text-gray-500" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-4 space-y-6">
              <div className="flex items-center justify-between py-2">
                <div>
                  <div className="font-medium text-gray-800 dark:text-gray-200">
                    Push Notifications
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Receive notifications for task reminders
                  </div>
                </div>
                <div>
                  <button
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                      settings.notifications ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                    onClick={() => toggleSetting('notifications')}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.notifications ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between py-2">
                <div>
                  <div className="font-medium text-gray-800 dark:text-gray-200">
                    Email Notifications
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Receive task reminders via email
                  </div>
                </div>
                <div>
                  <button
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                      settings.emailNotifications ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                    onClick={() => toggleSetting('emailNotifications')}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-sm border-none overflow-hidden">
            <CardHeader className="p-6 pb-2">
              <CardTitle className="text-lg font-normal flex items-center text-gray-800 dark:text-gray-200">
                <Globe className="h-5 w-5 mr-3 text-gray-400 dark:text-gray-500" />
                Language & Region
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-4">
              <div className="flex items-center justify-between py-2">
                <div>
                  <div className="font-medium text-gray-800 dark:text-gray-200">Language</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Select your preferred language
                  </div>
                </div>
                <div>
                  <select
                    className="rounded-md border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 py-2 px-3"
                    value={settings.language}
                    onChange={e => setSettings({ ...settings, language: e.target.value })}
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    <option value="Japanese">Japanese</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-sm border-none overflow-hidden">
            <CardHeader className="p-6 pb-2">
              <CardTitle className="text-lg font-normal flex items-center text-gray-800 dark:text-gray-200">
                <EyeOff className="h-5 w-5 mr-3 text-gray-400 dark:text-gray-500" />
                Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-4 space-y-6">
              <div className="flex items-center justify-between py-2">
                <div>
                  <div className="font-medium text-gray-800 dark:text-gray-200">
                    Show Completed Tasks
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Show completed tasks in lists
                  </div>
                </div>
                <div>
                  <button
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                      settings.privacy.showCompleted
                        ? 'bg-blue-600'
                        : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                    onClick={() => togglePrivacySetting('showCompleted')}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.privacy.showCompleted ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between py-2">
                <div>
                  <div className="font-medium text-gray-800 dark:text-gray-200">
                    Show Task Details
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Show task details in task lists
                  </div>
                </div>
                <div>
                  <button
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                      settings.privacy.showTaskDetails
                        ? 'bg-blue-600'
                        : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                    onClick={() => togglePrivacySetting('showTaskDetails')}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.privacy.showTaskDetails ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-sm border-none overflow-hidden">
            <CardHeader className="p-6 pb-2">
              <CardTitle className="text-lg font-normal flex items-center text-gray-800 dark:text-gray-200">
                <Smartphone className="h-5 w-5 mr-3 text-gray-400 dark:text-gray-500" />
                Connected Devices
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-4">
              <div className="py-2">
                <div className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                  No devices connected
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  Connect your mobile devices to sync tasks
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white">
                  Connect Device
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
