import React, {useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'components/core/Snackbar';

import getClassName from 'tools/getClassName';
import {isDev} from 'tools/envFunctions';
import {useNotifications} from 'components/providers/NotificationProvider';

import IconButton from 'components/core/IconButton';

import './NotificationSnackbar.scss';

export default function NotificationSnackbar({className}) {
    const {currentNotification, removeNotification} = useNotifications();
    const {devMessage, message, messageKey, ttl} = useMemo(
        () => currentNotification || {},
        [currentNotification]
    );
    const [showDevPanel, setShowDevPanel] = useState(false);
    const [rootClassName, getChildClass] = getClassName({
        className,
        rootClass: 'notification-snackbar',
    });

    function handleClose(event) {
        removeNotification(messageKey);
    }

    function handleToggleDevPanel() {
        setShowDevPanel(!showDevPanel);
    }

    return (
        <Snackbar
            open={!!message}
            onClose={handleClose}
            message={
                <div className={rootClassName}>
                    {message}
                    {isDev() && devMessage && showDevPanel && (
                        <code className={getChildClass('development-message')}>
                            {devMessage}
                        </code>
                    )}
                </div>
            }
            action={
                <React.Fragment>
                    {isDev() && <IconButton icon="code" onClick={handleToggleDevPanel} />}
                    <IconButton onClick={handleClose} icon="close" />
                </React.Fragment>
            }
            timeout={ttl || 10000}
        />
    );
}

NotificationSnackbar.propTypes = {
    className: PropTypes.string,
};
