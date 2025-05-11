import { Feather } from '@expo/vector-icons';
import { FunctionComponent } from 'react';
import { View, Text, Image } from 'react-native';

import FieldLayout from '~/components/layouts/field-layout';
import CardBasic from '~/components/plugins/card-basic';

interface ReportProofFormProps {
  // form: ReturnType<typeof useReportProofForm>['form'];
  // role: string;
  imageUrl: string;
  compensationReason: string;
  compensationAmount: number;
  isPaid: boolean;
  status: number;
}

const ReportProofForm: FunctionComponent<ReportProofFormProps> = ({
  imageUrl,
  compensationReason,
  compensationAmount,
  isPaid,
}) => {
  return (
    <CardBasic className="gap-2">
      <FieldLayout label="Chứng từ bồi thường">
        <View className="gap-2">
          <RenderInfo label="Lý do bồi thường" value={compensationReason} />
          <RenderInfo label="Số tiền bồi thường" value={compensationAmount.toString()} />
          <RenderInfo label="Trạng thái" value={isPaid ? 'Đã thanh toán' : 'Chưa thanh toán'} />
        </View>
      </FieldLayout>

      {imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          className="h-60 w-full rounded-lg object-cover shadow-lg"
        />
      ) : (
        <View className="h-60 w-full items-center justify-center gap-2 rounded-lg bg-gray-200 dark:bg-gray-800">
          <Feather name="image" size={40} color="gray" />
          <Text className="text-center text-sm text-gray-500">Chưa có ảnh bồi thường</Text>
        </View>
      )}
    </CardBasic>
  );
};

export default ReportProofForm;

interface RenderInfoProps {
  label: string;
  value: string;
}

const RenderInfo: FunctionComponent<RenderInfoProps> = ({ label, value }) => {
  return (
    <View className="flex-row items-center justify-between gap-2">
      <Text className="text-sm font-medium text-gray-500">{label}</Text>
      <Text className="text-sm">{value}</Text>
    </View>
  );
};
