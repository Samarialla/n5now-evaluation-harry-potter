import React, { Suspense } from 'react';
import { Switch, Route, Router, Link } from 'react-router-dom'
import HarryPotter from './components/HarryPotter';
import { useTranslation } from 'react-i18next';

export default ({ history }) => {
    const { t } = useTranslation();

    return (<>
        <div className='mt-2 mb-2'>
            <Suspense fallback="loading">
                <Router history={history}>
                    <Link to='/harry-potter'>{t('list-harry')}</Link>
                    <Switch>
                        <Route path="/harry-potter" component={HarryPotter} />
                    </Switch>
                </Router>
            </Suspense>
        </div>

    </>)
}