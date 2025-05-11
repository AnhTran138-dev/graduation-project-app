import { Feather } from '@expo/vector-icons';
import { FunctionComponent } from 'react';
import { View, Text } from 'react-native';

import Description from '../car-editor/description';
import Subtitle from '../car-editor/subtitle';
import ReportBadgeStatus from '../report-list/report-badge-status';
import ReportBadgeType from '../report-list/report-badge-type';

import CardBasic from '~/components/plugins/card-basic';
import { ReportDetailResponse } from '~/constants/models/report.model';
import { COLORS } from '~/theme/colors';

interface ReportBasicInfoProps {
  title: ReportDetailResponse['title'];
  reportType: ReportDetailResponse['reportType'];
  description: ReportDetailResponse['description'];
  reportName: ReportDetailResponse['reporterName'];
  status: ReportDetailResponse['status'];
}

const ReportBasicInfo: FunctionComponent<ReportBasicInfoProps> = ({
  title,
  reportType,
  description,
  reportName,
  status,
}) => {
  return (
    <CardBasic className="gap-4">
      <View className="flex-row items-start justify-between">
        <View className="items-start gap-2">
          <Subtitle title={title} />
          <ReportBadgeType type={reportType} />
          {/* <Description title={translatedType || ''} /> */}
        </View>
        <ReportBadgeStatus status={status} textSize="text-base" fontWeight="font-bold" />
      </View>
      <Description title={description} />
      <View className="flex-row items-center gap-2">
        <Feather name="user" size={16} color={COLORS.gray} />
        <Text className="text-sm font-bold text-gray-400 dark:text-gray-300">
          {' '}
          Được báo cáo bởi: {reportName}
        </Text>
      </View>
    </CardBasic>
  );
};

export default ReportBasicInfo;
